<script setup>
import { ref, computed } from 'vue'
import RadarChart from './RadarChart.vue'
import { SCALES } from '../data/cultureData.js'
import { ArrowLeftRight, AlertTriangle, CheckCircle2, Zap } from 'lucide-vue-next'

const props = defineProps({
  countries: {
    type: Array,
    required: true
  },
  initialCountryA: {
    type: String,
    default: 'us'
  },
  initialCountryB: {
    type: String,
    default: 'fr'
  }
})

const countryAId = ref(props.initialCountryA)
const countryBId = ref(props.initialCountryB)
const countryCId = ref('') // Optional 3rd country

const countryA = computed(() => props.countries.find(c => c.id === countryAId.value) || props.countries[0])
const countryB = computed(() => props.countries.find(c => c.id === countryBId.value) || props.countries[1])
const countryC = computed(() => props.countries.find(c => c.id === countryCId.value) || null)

// Preset comparisons discussed in Meyer's book
const presets = [
  { label: 'US 🇺🇸 vs France 🇫🇷', a: 'us', b: 'fr', desc: 'Descartes vs Bottom-Line & Feedback Sandwich' },
  { label: 'Netherlands 🇳🇱 vs US 🇺🇸', a: 'nl', b: 'us', desc: 'Extreme Direct Feedback vs Explicit Politeness' },
  { label: 'Germany 🇩🇪 vs Japan 🇯🇵', a: 'de', b: 'jp', desc: 'Linear Precision vs Consensus & Face Saving' },
  { label: 'US 🇺🇸 vs China 🇨🇳', a: 'us', b: 'cn', desc: 'Transactional Speed vs Guanxi Relationships' },
  { label: 'UK 🇬🇧 vs France 🇫🇷', a: 'gb', b: 'fr', desc: 'Understated Hedging vs Cartesian Debate' },
  { label: 'Israel 🇮🇱 vs Sweden 🇸🇪', a: 'il', b: 'se', desc: 'Passionate Dugri vs Harmonious Lagom' },
  { label: 'Brazil 🇧🇷 vs Germany 🇩🇪', a: 'br', b: 'de', desc: 'Relational Flexibility vs Linear Rigor' }
]

function applyPreset(preset) {
  countryAId.value = preset.a
  countryBId.value = preset.b
  countryCId.value = ''
}

function swapCountries() {
  const temp = countryAId.value
  countryAId.value = countryBId.value
  countryBId.value = temp
}

// Radar Chart Payload
const radarCountries = computed(() => {
  const list = [
    {
      name: countryA.value.name,
      flag: countryA.value.flag,
      color: '#4f46e5', // indigo
      scores: countryA.value.scores
    },
    {
      name: countryB.value.name,
      flag: countryB.value.flag,
      color: '#ec4899', // pink
      scores: countryB.value.scores
    }
  ]
  if (countryC.value) {
    list.push({
      name: countryC.value.name,
      flag: countryC.value.flag,
      color: '#10b981', // emerald
      scores: countryC.value.scores
    })
  }
  return list
})

// Scale Gaps & Friction Analysis
const scaleComparisons = computed(() => {
  return SCALES.map(scale => {
    const scoreA = countryA.value.scores[scale.id]
    const scoreB = countryB.value.scores[scale.id]
    const gap = Math.abs(scoreA - scoreB)

    let severity = 'low'
    if (gap >= 4.5) severity = 'high'
    else if (gap >= 2.5) severity = 'medium'

    // Friction diagnosis based on Erin Meyer's rules
    let frictionDiagnosis = ''
    if (severity === 'high') {
      if (scale.id === 'evaluating') {
        const directOne = scoreA < scoreB ? countryA.value : countryB.value
        const indirectOne = scoreA < scoreB ? countryB.value : countryA.value
        frictionDiagnosis = `${directOne.name} may come across as brutally blunt, while ${indirectOne.name} will soften critiques with downgraders that ${directOne.name} might totally overlook.`
      } else if (scale.id === 'communicating') {
        const lowCtx = scoreA < scoreB ? countryA.value : countryB.value
        const highCtx = scoreA < scoreB ? countryB.value : countryA.value
        frictionDiagnosis = `${lowCtx.name} relies strictly on explicit words and recaps; ${highCtx.name} expects nuance and reading between the lines.`
      } else if (scale.id === 'persuading') {
        const principles = scoreA < scoreB ? countryA.value : countryB.value
        const apps = scoreA < scoreB ? countryB.value : countryA.value
        frictionDiagnosis = `${principles.name} requires theoretical methodology before decisions; ${apps.name} demands executive summary case studies immediately.`
      } else if (scale.id === 'leading') {
        const egal = scoreA < scoreB ? countryA.value : countryB.value
        const hier = scoreA < scoreB ? countryB.value : countryA.value
        frictionDiagnosis = `${egal.name} bypasses management levels easily, whereas ${hier.name} treats chain of command with strict protocol.`
      } else if (scale.id === 'deciding') {
        const cons = scoreA < scoreB ? countryA.value : countryB.value
        const top = scoreA < scoreB ? countryB.value : countryA.value
        frictionDiagnosis = `${cons.name} demands consensus buy-in (slow start, rapid execution); ${top.name} expects the boss to decide unilaterally.`
      } else if (scale.id === 'trusting') {
        const task = scoreA < scoreB ? countryA.value : countryB.value
        const rel = scoreA < scoreB ? countryB.value : countryA.value
        frictionDiagnosis = `${task.name} focuses purely on competence and deliverables; ${rel.name} requires social dinners, coffee, and affective bonds.`
      } else if (scale.id === 'disagreeing') {
        const conf = scoreA < scoreB ? countryA.value : countryB.value
        const avoid = scoreA < scoreB ? countryB.value : countryA.value
        frictionDiagnosis = `${conf.name} sees debate as healthy sport; ${avoid.name} feels open disagreement destroys harmony and causes loss of face.`
      } else if (scale.id === 'scheduling') {
        const linear = scoreA < scoreB ? countryA.value : countryB.value
        const flex = scoreA < scoreB ? countryB.value : countryA.value
        frictionDiagnosis = `${linear.name} treats time strictly to the minute; ${flex.name} adapts schedules dynamically to relationships and events.`
      }
    }

    return {
      scale,
      scoreA,
      scoreB,
      gap,
      severity,
      frictionDiagnosis
    }
  }).sort((a, b) => b.gap - a.gap) // Show highest gap first
})

// Overall cultural distance
const averageGap = computed(() => {
  const sum = scaleComparisons.value.reduce((acc, curr) => acc + curr.gap, 0)
  return (sum / scaleComparisons.value.length).toFixed(1)
})
</script>

<template>
  <div class="space-y-6">
    <!-- Preset Shortcuts Banner -->
    <div class="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs">
      <div class="flex items-center gap-2 mb-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
        <Zap class="w-4 h-4 text-amber-500" />
        <span>Meyer's Classic Book Matchups</span>
      </div>
      <div class="flex flex-wrap gap-2">
        <button
          v-for="p in presets"
          :key="p.label"
          @click="applyPreset(p)"
          class="px-3 py-1.5 rounded-lg text-xs font-medium border transition-all text-left"
          :class="countryAId === p.a && countryBId === p.b
            ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300'"
        >
          <span class="font-bold block">{{ p.label }}</span>
          <span class="text-[10px] opacity-80 line-clamp-1">{{ p.desc }}</span>
        </button>
      </div>
    </div>

    <!-- Country Selectors Header -->
    <div class="grid grid-cols-1 md:grid-cols-12 gap-4 items-center bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
      <!-- Country A Selector -->
      <div class="md:col-span-5 p-3 rounded-xl border-2 border-indigo-200 bg-indigo-50/30">
        <label class="text-[11px] font-bold text-indigo-900 uppercase tracking-wider block mb-1">
          Country 1 (Primary)
        </label>
        <select
          v-model="countryAId"
          class="w-full text-base font-bold bg-white text-slate-900 border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-indigo-500"
        >
          <option v-for="c in countries" :key="c.id" :value="c.id">
            {{ c.flag }} {{ c.name }} ({{ c.region }})
          </option>
        </select>
      </div>

      <!-- Swap Button -->
      <div class="md:col-span-2 flex justify-center">
        <button
          @click="swapCountries"
          title="Swap countries"
          class="p-3 rounded-full bg-slate-100 hover:bg-indigo-100 text-slate-600 hover:text-indigo-600 border border-slate-200 transition-all shadow-xs"
        >
          <ArrowLeftRight class="w-5 h-5" />
        </button>
      </div>

      <!-- Country B Selector -->
      <div class="md:col-span-5 p-3 rounded-xl border-2 border-pink-200 bg-pink-50/30">
        <label class="text-[11px] font-bold text-pink-900 uppercase tracking-wider block mb-1">
          Country 2 (Comparative)
        </label>
        <select
          v-model="countryBId"
          class="w-full text-base font-bold bg-white text-slate-900 border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-pink-500"
        >
          <option v-for="c in countries" :key="c.id" :value="c.id">
            {{ c.flag }} {{ c.name }} ({{ c.region }})
          </option>
        </select>
      </div>
    </div>

    <!-- Dual Radar Chart & Cultural Distance Stats -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <!-- Radar Visualizer -->
      <div class="lg:col-span-7 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col items-center">
        <div class="w-full flex items-center justify-between mb-4">
          <div>
            <h3 class="font-bold text-slate-900 text-base">Superimposed 8-Scale Radar</h3>
            <p class="text-xs text-slate-500">Visual overlap and divergence across all dimensions</p>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
              Avg Gap: <strong class="text-slate-900">{{ averageGap }}/10</strong>
            </span>
          </div>
        </div>

        <RadarChart :countries="radarCountries" :scales="SCALES" :size="380" />
      </div>

      <!-- Friction Hotspots Summary -->
      <div class="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col">
        <div class="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
          <AlertTriangle class="w-5 h-5 text-amber-500 shrink-0" />
          <div>
            <h3 class="font-bold text-slate-900 text-sm">Potential Friction Hotspots</h3>
            <p class="text-xs text-slate-500">Scales with the highest divergence</p>
          </div>
        </div>

        <div class="space-y-3 overflow-y-auto max-h-[380px] pr-1">
          <div
            v-for="item in scaleComparisons.filter(s => s.severity !== 'low')"
            :key="item.scale.id"
            class="p-3.5 rounded-xl border text-xs"
            :class="item.severity === 'high' ? 'bg-red-50/70 border-red-200' : 'bg-amber-50/70 border-amber-200'"
          >
            <div class="flex items-center justify-between font-bold mb-1">
              <span class="text-slate-900 flex items-center gap-1.5">
                <span class="w-2 h-2 rounded-full" :style="{ backgroundColor: item.scale.color }"></span>
                {{ item.scale.name }}
              </span>
              <span
                class="px-2 py-0.5 rounded text-[10px] font-mono font-bold"
                :class="item.severity === 'high' ? 'bg-red-200/70 text-red-900' : 'bg-amber-200/70 text-amber-900'"
              >
                Δ {{ item.gap.toFixed(1) }} pts
              </span>
            </div>

            <p class="text-[11px] text-slate-700 leading-relaxed">
              {{ item.frictionDiagnosis || item.scale.practicalTip }}
            </p>
          </div>

          <div
            v-if="scaleComparisons.filter(s => s.severity !== 'low').length === 0"
            class="p-6 text-center text-slate-500 text-xs bg-emerald-50 rounded-xl border border-emerald-200"
          >
            <CheckCircle2 class="w-8 h-8 text-emerald-600 mx-auto mb-2" />
            <p class="font-bold text-emerald-900">Very High Cultural Alignment</p>
            <p class="text-emerald-700 text-[11px] mt-1">These two cultures share remarkably close habits across the 8 scales.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Side-by-Side Dimension Table -->
    <div class="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
      <div class="p-5 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
        <div>
          <h3 class="font-bold text-slate-900 text-base">Full Scale-by-Scale Gap Breakdown</h3>
          <p class="text-xs text-slate-500">Sorted from greatest divergence to greatest convergence</p>
        </div>
      </div>

      <div class="divide-y divide-slate-100">
        <div
          v-for="item in scaleComparisons"
          :key="item.scale.id"
          class="p-4 hover:bg-slate-50/60 transition-colors"
        >
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs mb-2">
            <div class="flex items-center gap-2">
              <span
                class="w-6 h-6 rounded-md flex items-center justify-center font-bold text-[11px]"
                :style="{ backgroundColor: `${item.scale.color}15`, color: item.scale.color }"
              >
                {{ item.scale.number }}
              </span>
              <div>
                <span class="font-bold text-slate-900 text-sm">{{ item.scale.name }}</span>
                <span class="text-slate-500 text-[11px] ml-2 font-mono">({{ item.scale.leftPole }} ↔ {{ item.scale.rightPole }})</span>
              </div>
            </div>

            <!-- Scores Comparison -->
            <div class="flex items-center gap-4 text-xs font-mono">
              <div class="flex items-center gap-1.5">
                <span class="w-2.5 h-2.5 rounded-full bg-indigo-600"></span>
                <span class="font-bold text-indigo-900">{{ countryA.code }}: {{ item.scoreA.toFixed(1) }}</span>
              </div>
              <span class="text-slate-300">vs</span>
              <div class="flex items-center gap-1.5">
                <span class="w-2.5 h-2.5 rounded-full bg-pink-600"></span>
                <span class="font-bold text-pink-900">{{ countryB.code }}: {{ item.scoreB.toFixed(1) }}</span>
              </div>
              <span
                class="px-2 py-0.5 rounded font-bold text-[11px]"
                :class="item.severity === 'high' ? 'bg-red-100 text-red-800' : item.severity === 'medium' ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-700'"
              >
                Δ {{ item.gap.toFixed(1) }}
              </span>
            </div>
          </div>

          <!-- Dual Slider Comparison Bar -->
          <div class="relative h-4 bg-slate-100 rounded-full my-2.5">
            <!-- Pin A -->
            <div
              class="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-indigo-600 text-white font-bold text-[10px] flex items-center justify-center shadow-md ring-2 ring-white z-20"
              :style="{ left: `${(item.scoreA / 10) * 100}%` }"
              :title="`${countryA.name}: ${item.scoreA}`"
            >
              {{ countryA.code }}
            </div>
            <!-- Pin B -->
            <div
              class="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-pink-600 text-white font-bold text-[10px] flex items-center justify-center shadow-md ring-2 ring-white z-20"
              :style="{ left: `${(item.scoreB / 10) * 100}%` }"
              :title="`${countryB.name}: ${item.scoreB}`"
            >
              {{ countryB.code }}
            </div>
            <!-- Gap Connector bar -->
            <div
              class="absolute top-1/2 -translate-y-1/2 h-1.5 bg-gradient-to-r from-indigo-400 to-pink-400 rounded-full opacity-60 z-10"
              :style="{
                left: `${Math.min(item.scoreA, item.scoreB) * 10}%`,
                width: `${item.gap * 10}%`
              }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
