<script setup>
import { computed } from 'vue'
import RadarChart from './RadarChart.vue'
import { SCALES } from '../data/cultureData.js'
import { X, ArrowRight, Lightbulb, Briefcase, Award } from 'lucide-vue-next'

const props = defineProps({
  country: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['close', 'compare', 'add-to-team'])

const radarData = computed(() => {
  if (!props.country) return []
  return [{
    name: props.country.name,
    flag: props.country.flag,
    color: '#4f46e5',
    scores: props.country.scores
  }]
})
</script>

<template>
  <div
    v-if="country"
    class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
    @click.self="emit('close')"
  >
    <div class="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 md:p-8 text-slate-800">
      <!-- Close Button -->
      <button
        @click="emit('close')"
        class="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
      >
        <X class="w-5 h-5" />
      </button>

      <!-- Country Header -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div class="flex items-center gap-4">
          <span class="text-4xl p-2 bg-slate-50 border rounded-2xl shadow-xs">{{ country.flag }}</span>
          <div>
            <div class="flex items-center gap-2">
              <h2 class="text-2xl font-extrabold text-slate-900 tracking-tight">{{ country.name }}</h2>
              <span class="px-2 py-0.5 rounded text-xs font-mono font-bold bg-slate-100 text-slate-600">
                {{ country.code }}
              </span>
            </div>
            <p class="text-xs font-medium text-slate-500 mt-0.5">{{ country.region }}</p>
          </div>
        </div>

        <div class="flex items-center gap-2">
          <button
            @click="emit('compare', country)"
            class="px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200 hover:bg-indigo-100 transition-all flex items-center gap-1.5"
          >
            <span>Compare</span>
            <ArrowRight class="w-3.5 h-3.5" />
          </button>
          <button
            @click="emit('add-to-team', country)"
            class="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 text-white hover:bg-slate-800 transition-all flex items-center gap-1.5"
          >
            <span>+ Add to Team</span>
          </button>
        </div>
      </div>

      <!-- Famous Quote Banner -->
      <div v-if="country.famousQuotes" class="my-5 p-4 rounded-xl bg-gradient-to-r from-indigo-50/70 via-slate-50 to-blue-50/50 border border-indigo-100/80 italic text-slate-700 text-xs flex items-center gap-3">
        <span class="text-indigo-600 text-lg font-serif">“</span>
        <span class="leading-relaxed">{{ country.famousQuotes }}</span>
        <span class="text-indigo-600 text-lg font-serif">”</span>
      </div>

      <!-- Grid Layout: Radar Chart + 8-Scale Scorecard -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 my-6 items-center">
        <!-- Radar Chart Column -->
        <div class="lg:col-span-5 flex flex-col items-center justify-center p-4 bg-slate-50/70 rounded-2xl border border-slate-100">
          <h4 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
            8-Scale Cultural Profile
          </h4>
          <RadarChart :countries="radarData" :scales="SCALES" :size="320" />
        </div>

        <!-- 8 Scales Scorecard Column -->
        <div class="lg:col-span-7 space-y-3">
          <h4 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
            Scores Along the 8 Continuum Scales
          </h4>

          <div
            v-for="scale in SCALES"
            :key="scale.id"
            class="p-2.5 rounded-xl border border-slate-100 bg-white hover:border-slate-300 transition-colors"
          >
            <div class="flex items-center justify-between text-xs mb-1.5">
              <span class="font-bold text-slate-800 flex items-center gap-1.5">
                <span class="w-2 h-2 rounded-full" :style="{ backgroundColor: scale.color }"></span>
                {{ scale.name }}
              </span>
              <span class="font-mono font-bold text-slate-900">
                {{ country.scores[scale.id].toFixed(1) }} <span class="text-slate-400 font-normal">/ 10</span>
              </span>
            </div>

            <!-- Mini Progress Bar -->
            <div class="relative w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <div
                class="absolute left-0 top-0 bottom-0 rounded-full transition-all duration-500"
                :style="{
                  width: `${(country.scores[scale.id] / 10) * 100}%`,
                  backgroundColor: scale.color
                }"
              ></div>
            </div>

            <div class="flex items-center justify-between text-[10px] text-slate-400 mt-1">
              <span>{{ scale.leftPole }}</span>
              <span>{{ scale.rightPole }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Key Insights & Workplace Collaboration Advice -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
        <!-- Insights from Meyer -->
        <div class="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
          <div class="flex items-center gap-2 font-bold text-slate-900 text-xs mb-3">
            <Award class="w-4 h-4 text-amber-500" />
            <span>Key Book Characteristics & Insights</span>
          </div>
          <ul class="space-y-2 text-xs text-slate-600">
            <li
              v-for="(insight, idx) in country.keyInsights"
              :key="idx"
              class="flex items-start gap-2 leading-relaxed"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0"></span>
              <span>{{ insight }}</span>
            </li>
          </ul>
        </div>

        <!-- Workplace Advice -->
        <div class="p-5 rounded-xl bg-indigo-50/50 border border-indigo-100">
          <div class="flex items-center gap-2 font-bold text-indigo-900 text-xs mb-3">
            <Briefcase class="w-4 h-4 text-indigo-600" />
            <span>How to Collaborate Effectively</span>
          </div>
          <p class="text-xs text-slate-700 leading-relaxed">
            {{ country.workplaceAdvice }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
