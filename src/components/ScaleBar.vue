<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  scale: {
    type: Object,
    required: true
  },
  countries: {
    type: Array,
    required: true
  },
  highlightedCountryId: {
    type: String,
    default: null
  },
  compareCountryIds: {
    type: Array,
    default: () => []
  },
  showAllCountries: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['select-country'])

const hoveredCountry = ref(null)

// Sort countries along this scale
const sortedCountries = computed(() => {
  return [...props.countries].sort((a, b) => {
    return (a.scores[props.scale.id] ?? 0) - (b.scores[props.scale.id] ?? 0)
  })
})

function isHighlighted(country) {
  if (props.highlightedCountryId && country.id === props.highlightedCountryId) return true
  if (props.compareCountryIds && props.compareCountryIds.includes(country.id)) return true
  return false
}

function getCompareColor(countryId) {
  const idx = props.compareCountryIds.indexOf(countryId)
  if (idx === 0) return '#4f46e5' // indigo
  if (idx === 1) return '#ec4899' // pink
  if (idx === 2) return '#10b981' // emerald
  return '#64748b'
}
</script>

<template>
  <div class="bg-white rounded-xl border border-slate-200/80 p-5 shadow-sm hover:shadow-md transition-shadow">
    <!-- Header of Scale -->
    <div class="flex items-center justify-between mb-3">
      <div class="flex items-center gap-2.5">
        <span
          class="w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs"
          :style="{ backgroundColor: `${scale.color}15`, color: scale.color }"
        >
          {{ scale.number }}
        </span>
        <div>
          <h3 class="font-bold text-slate-900 text-base leading-tight">
            {{ scale.name }}
          </h3>
          <p class="text-xs text-slate-500">{{ scale.question }}</p>
        </div>
      </div>
      <span
        class="text-xs px-2.5 py-1 rounded-full font-medium"
        :style="{ backgroundColor: `${scale.color}15`, color: scale.color }"
      >
        {{ scale.shortName }}
      </span>
    </div>

    <!-- Poles Definition -->
    <div class="grid grid-cols-2 gap-4 text-xs mb-3.5">
      <div class="bg-slate-50/80 p-2.5 rounded-lg border border-slate-100">
        <div class="font-bold text-slate-800 flex items-center gap-1.5 mb-1">
          <span class="w-2 h-2 rounded-full" :style="{ backgroundColor: scale.color }"></span>
          {{ scale.leftPole }}
        </div>
        <p class="text-slate-600 text-[11px] leading-relaxed line-clamp-2" :title="scale.leftDesc">
          {{ scale.leftDesc }}
        </p>
      </div>

      <div class="bg-slate-50/80 p-2.5 rounded-lg border border-slate-100 text-right">
        <div class="font-bold text-slate-800 flex items-center justify-end gap-1.5 mb-1">
          {{ scale.rightPole }}
          <span class="w-2 h-2 rounded-full bg-slate-400"></span>
        </div>
        <p class="text-slate-600 text-[11px] leading-relaxed line-clamp-2" :title="scale.rightDesc">
          {{ scale.rightDesc }}
        </p>
      </div>
    </div>

    <!-- The Interactive Spectrum Track -->
    <div class="relative pt-6 pb-9 px-3">
      <!-- Axis Track -->
      <div class="h-2.5 w-full bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 rounded-full relative">
        <!-- Colored subtle overlay -->
        <div
          class="absolute inset-0 rounded-full opacity-30"
          :style="{ background: `linear-gradient(90deg, ${scale.color}, #94a3b8)` }"
        ></div>

        <!-- 0, 5, 10 Tick marks -->
        <div class="absolute left-0 top-3 text-[10px] font-mono text-slate-400">0</div>
        <div class="absolute left-1/2 -translate-x-1/2 top-3 text-[10px] font-mono text-slate-400">5</div>
        <div class="absolute right-0 top-3 text-[10px] font-mono text-slate-400">10</div>
      </div>

      <!-- Country Pins -->
      <div
        v-for="(country, idx) in sortedCountries"
        :key="country.id"
        class="absolute top-1 -translate-x-1/2 transition-all duration-200 cursor-pointer group"
        :style="{
          left: `${(country.scores[scale.id] / 10) * 100}%`,
          zIndex: isHighlighted(country) ? 30 : hoveredCountry === country.id ? 40 : (10 + (idx % 5))
        }"
        @mouseenter="hoveredCountry = country.id"
        @mouseleave="hoveredCountry = null"
        @click="emit('select-country', country)"
      >
        <!-- Marker pin -->
        <div
          class="flex flex-col items-center"
          :class="[
            isHighlighted(country) ? 'scale-125' : 'hover:scale-125'
          ]"
        >
          <!-- Flag & Bubble -->
          <div
            class="px-1.5 py-0.5 rounded-md text-[11px] shadow-sm font-semibold flex items-center gap-1 border transition-all"
            :class="[
              isHighlighted(country)
                ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-indigo-400'
                : 'bg-white text-slate-700 border-slate-200 hover:border-indigo-400 hover:bg-indigo-50'
            ]"
            :style="compareCountryIds.includes(country.id) ? {
              borderColor: getCompareColor(country.id),
              backgroundColor: '#ffffff',
              boxShadow: `0 0 0 2px ${getCompareColor(country.id)}`
            } : {}"
          >
            <span>{{ country.flag }}</span>
            <span class="text-[10px] tracking-tight font-mono">{{ country.code }}</span>
          </div>

          <!-- Vertical tick line -->
          <div
            class="w-0.5 h-3 -mt-0.5"
            :class="[
              isHighlighted(country) ? 'bg-indigo-600 h-3.5 w-1' : 'bg-slate-300 group-hover:bg-indigo-500'
            ]"
          ></div>
        </div>

        <!-- Tooltip on hover -->
        <div
          v-if="hoveredCountry === country.id"
          class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-52 p-2.5 bg-slate-900 text-white text-xs rounded-lg shadow-xl pointer-events-none z-50 text-left animate-in fade-in zoom-in-95 duration-150"
        >
          <div class="flex items-center justify-between pb-1 border-b border-slate-800 mb-1">
            <span class="font-bold flex items-center gap-1.5">
              <span>{{ country.flag }}</span> {{ country.name }}
            </span>
            <span class="font-mono text-indigo-400 font-bold">
              {{ country.scores[scale.id].toFixed(1) }}/10
            </span>
          </div>
          <p class="text-[11px] text-slate-300 line-clamp-3">
            {{ country.keyInsights[0] }}
          </p>
          <div class="mt-1 text-[10px] text-slate-400 italic">
            Click to inspect country profile
          </div>
        </div>
      </div>
    </div>

    <!-- Practical Tip Footer -->
    <div class="mt-2 pt-3 border-t border-slate-100 flex items-start gap-2 text-xs text-slate-600 bg-slate-50/50 p-2.5 rounded-lg">
      <span class="font-bold text-slate-800 shrink-0">Erin Meyer's Rule:</span>
      <p class="text-[11px] text-slate-600 leading-relaxed">{{ scale.practicalTip }}</p>
    </div>
  </div>
</template>
