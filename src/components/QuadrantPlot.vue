<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  matrix: {
    type: Object,
    required: true
  },
  countries: {
    type: Array,
    required: true
  },
  selectedCountry: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['select-country'])

const hoveredCountry = ref(null)

const size = 520
const padding = 60
const innerSize = size - (padding * 2)

function getCoords(country) {
  const xVal = country.scores[props.matrix.xAxis.id] ?? 5
  const yVal = country.scores[props.matrix.yAxis.id] ?? 5
  const x = padding + ((xVal / 10) * innerSize)
  // Invert Y so 0 is at bottom, 10 is at top
  const y = size - padding - ((yVal / 10) * innerSize)
  return { x, y, xVal, yVal }
}
</script>

<template>
  <div class="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm">
    <!-- Matrix Header -->
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-100">
      <div>
        <h3 class="text-xl font-bold text-slate-900 tracking-tight">
          {{ matrix.title }}
        </h3>
        <p class="text-xs text-slate-500 font-medium">
          {{ matrix.subtitle }}
        </p>
      </div>

      <div class="flex items-center gap-2 text-xs">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 font-semibold border border-indigo-100">
          <span class="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
          Interactive 2D Matrix
        </span>
      </div>
    </div>

    <!-- Main Plot Area -->
    <div class="flex flex-col lg:flex-row items-center gap-8 justify-center">
      <!-- SVG 2x2 Canvas -->
      <div class="relative select-none">
        <svg :width="size" :height="size" class="overflow-visible rounded-xl shadow-inner bg-slate-50/70 border border-slate-200">
          <!-- 4 Quadrant Tinted Backgrounds -->
          <!-- Q1: Top-Left (Low X, High Y) -->
          <rect
            :x="padding"
            :y="padding"
            :width="innerSize / 2"
            :height="innerSize / 2"
            fill="#eff6ff"
            fill-opacity="0.6"
          />
          <!-- Q2: Top-Right (High X, High Y) -->
          <rect
            :x="padding + (innerSize / 2)"
            :y="padding"
            :width="innerSize / 2"
            :height="innerSize / 2"
            fill="#faf5ff"
            fill-opacity="0.6"
          />
          <!-- Q3: Bottom-Left (Low X, Low Y) -->
          <rect
            :x="padding"
            :y="padding + (innerSize / 2)"
            :width="innerSize / 2"
            :height="innerSize / 2"
            fill="#ecfdf5"
            fill-opacity="0.6"
          />
          <!-- Q4: Bottom-Right (High X, Low Y) -->
          <rect
            :x="padding + (innerSize / 2)"
            :y="padding + (innerSize / 2)"
            :width="innerSize / 2"
            :height="innerSize / 2"
            fill="#fff7ed"
            fill-opacity="0.6"
          />

          <!-- Midpoint Dividing Lines -->
          <line
            :x1="padding + (innerSize / 2)"
            :y1="padding"
            :x2="padding + (innerSize / 2)"
            :y2="size - padding"
            stroke="#94a3b8"
            stroke-width="1.5"
            stroke-dasharray="4,4"
          />
          <line
            :x1="padding"
            :y1="padding + (innerSize / 2)"
            :x2="size - padding"
            :y2="padding + (innerSize / 2)"
            stroke="#94a3b8"
            stroke-width="1.5"
            stroke-dasharray="4,4"
          />

          <!-- Axis Labels on Plot Edges -->
          <!-- X-Axis Left -->
          <text
            :x="padding"
            :y="size - padding + 28"
            class="text-[11px] font-bold fill-slate-700"
          >
            ← {{ matrix.xAxis.leftLabel }}
          </text>
          <!-- X-Axis Right -->
          <text
            :x="size - padding"
            :y="size - padding + 28"
            text-anchor="end"
            class="text-[11px] font-bold fill-slate-700"
          >
            {{ matrix.xAxis.rightLabel }} →
          </text>

          <!-- Y-Axis Bottom -->
          <text
            :x="padding - 10"
            :y="size - padding"
            text-anchor="end"
            class="text-[11px] font-bold fill-slate-700"
          >
            {{ matrix.yAxis.leftLabel }}
          </text>
          <!-- Y-Axis Top -->
          <text
            :x="padding - 10"
            :y="padding + 10"
            text-anchor="end"
            class="text-[11px] font-bold fill-slate-700"
          >
            {{ matrix.yAxis.rightLabel }}
          </text>

          <!-- Country Dots -->
          <g
            v-for="country in countries"
            :key="country.id"
            class="cursor-pointer transition-transform duration-150"
            :transform="`translate(${getCoords(country).x}, ${getCoords(country).y})`"
            @mouseenter="hoveredCountry = country"
            @mouseleave="hoveredCountry = null"
            @click="emit('select-country', country)"
          >
            <circle
              :r="hoveredCountry?.id === country.id || selectedCountry?.id === country.id ? 14 : 11"
              :fill="selectedCountry?.id === country.id ? '#4f46e5' : hoveredCountry?.id === country.id ? '#0f172a' : '#ffffff'"
              stroke="#64748b"
              :stroke-width="selectedCountry?.id === country.id ? 3 : 1.5"
              class="drop-shadow-sm transition-all"
            />
            <text
              text-anchor="middle"
              dominant-baseline="central"
              class="text-[13px] pointer-events-none select-none"
            >
              {{ country.flag }}
            </text>

            <!-- Country label tag -->
            <text
              y="18"
              text-anchor="middle"
              class="text-[9px] font-bold font-mono tracking-wider transition-all"
              :class="selectedCountry?.id === country.id ? 'fill-indigo-600 font-extrabold' : 'fill-slate-600'"
            >
              {{ country.code }}
            </text>
          </g>
        </svg>

        <!-- Hover Popover -->
        <div
          v-if="hoveredCountry"
          class="absolute top-4 right-4 max-w-xs p-3 bg-slate-900/95 text-white rounded-xl shadow-2xl backdrop-blur text-xs z-30 pointer-events-none animate-in fade-in"
        >
          <div class="flex items-center gap-2 font-bold text-sm mb-1">
            <span>{{ hoveredCountry.flag }}</span>
            <span>{{ hoveredCountry.name }}</span>
            <span class="text-slate-400 font-mono text-xs">({{ hoveredCountry.code }})</span>
          </div>
          <div class="space-y-1 text-slate-300 text-[11px] mb-2">
            <div>
              <span class="text-slate-400">{{ matrix.xAxis.name }}:</span>
              <span class="font-bold text-white ml-1">{{ hoveredCountry.scores[matrix.xAxis.id] }}/10</span>
            </div>
            <div>
              <span class="text-slate-400">{{ matrix.yAxis.name }}:</span>
              <span class="font-bold text-white ml-1">{{ hoveredCountry.scores[matrix.yAxis.id] }}/10</span>
            </div>
          </div>
          <p class="text-[11px] text-indigo-300 italic">
            {{ hoveredCountry.keyInsights[0] }}
          </p>
        </div>
      </div>

      <!-- Quadrant Breakdown Legend Cards -->
      <div class="w-full lg:w-80 flex flex-col gap-3">
        <h4 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
          Quadrant Characteristics
        </h4>

        <div
          v-for="(quad, idx) in matrix.quadrantLabels"
          :key="idx"
          class="p-3.5 rounded-xl border transition-all text-xs"
          :class="[
            idx === 0 ? 'bg-blue-50/70 border-blue-200' :
            idx === 1 ? 'bg-purple-50/70 border-purple-200' :
            idx === 2 ? 'bg-emerald-50/70 border-emerald-200' :
            'bg-amber-50/70 border-amber-200'
          ]"
        >
          <div class="font-bold text-slate-900 mb-1 flex items-center justify-between">
            <span>{{ quad.name }}</span>
            <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-white/80 border border-slate-200">
              Q{{ idx + 1 }}
            </span>
          </div>
          <p class="text-slate-600 text-[11px] leading-relaxed mb-2">
            {{ quad.description }}
          </p>
          <div class="flex flex-wrap gap-1">
            <span
              v-for="ex in quad.examples"
              :key="ex"
              class="px-1.5 py-0.5 bg-white rounded text-[10px] font-medium text-slate-700 shadow-2xs border border-slate-200"
            >
              {{ ex }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Erin Meyer's Key Takeaway Banner -->
    <div class="mt-6 p-4 rounded-xl bg-slate-900 text-white flex items-start gap-3">
      <div class="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0 font-bold text-base">
        💡
      </div>
      <div>
        <div class="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-0.5">
          Erin Meyer's Key Book Takeaway
        </div>
        <p class="text-xs text-slate-200 leading-relaxed">
          {{ matrix.meyerTakeaway }}
        </p>
      </div>
    </div>
  </div>
</template>
