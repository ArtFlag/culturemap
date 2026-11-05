<script setup>
import { ref, computed } from 'vue'
import { SCALES } from '../data/cultureData.js'
import { Users, Plus, Trash2, ShieldCheck, Sparkles, AlertCircle } from 'lucide-vue-next'

const props = defineProps({
  countries: {
    type: Array,
    required: true
  }
})

// Current team members: list of { id, countryId, name }
const teamMembers = ref([
  { id: '1', countryId: 'us', role: 'Product Manager' },
  { id: '2', countryId: 'fr', role: 'Lead Architect' },
  { id: '3', countryId: 'jp', role: 'Quality Engineer' },
  { id: '4', countryId: 'de', role: 'DevOps Engineer' }
])

const selectedCountryToAdd = ref('nl')
const memberRoleToAdd = ref('')

function addMember() {
  if (!selectedCountryToAdd.value) return
  teamMembers.value.push({
    id: Date.now().toString(),
    countryId: selectedCountryToAdd.value,
    role: memberRoleToAdd.value || 'Team Member'
  })
  memberRoleToAdd.value = ''
}

function removeMember(id) {
  teamMembers.value = teamMembers.value.filter(m => m.id !== id)
}

function getCountry(countryId) {
  return props.countries.find(c => c.id === countryId) || props.countries[0]
}

// Team presets
function loadPreset(type) {
  if (type === 'tech') {
    teamMembers.value = [
      { id: '1', countryId: 'us', role: 'Head of Product' },
      { id: '2', countryId: 'in', role: 'Engineering Lead' },
      { id: '3', countryId: 'de', role: 'Systems Engineer' },
      { id: '4', countryId: 'br', role: 'UX Designer' }
    ]
  } else if (type === 'asia-pacific') {
    teamMembers.value = [
      { id: '1', countryId: 'jp', role: 'Country Manager' },
      { id: '2', countryId: 'sg', role: 'Operations' },
      { id: '3', countryId: 'au', role: 'Sales Lead' },
      { id: '4', countryId: 'cn', role: 'Supply Chain' }
    ]
  } else if (type === 'europe') {
    teamMembers.value = [
      { id: '1', countryId: 'fr', role: 'Strategy Director' },
      { id: '2', countryId: 'nl', role: 'Product Owner' },
      { id: '3', countryId: 'se', role: 'Agile Coach' },
      { id: '4', countryId: 'gb', role: 'Marketing Manager' }
    ]
  }
}

// Compute Team Spread on all 8 scales
const teamMetrics = computed(() => {
  if (teamMembers.value.length === 0) return []

  return SCALES.map(scale => {
    const scores = teamMembers.value.map(m => {
      const c = getCountry(m.countryId)
      return {
        memberId: m.id,
        role: m.role,
        country: c,
        score: c.scores[scale.id]
      }
    })

    const scoreVals = scores.map(s => s.score)
    const min = Math.min(...scoreVals)
    const max = Math.max(...scoreVals)
    const delta = max - min
    const avg = scoreVals.reduce((a, b) => a + b, 0) / scoreVals.length

    return {
      scale,
      scores,
      min,
      max,
      delta,
      avg: Number(avg.toFixed(1)),
      isTensionPoint: delta >= 4.0
    }
  }).sort((a, b) => b.delta - a.delta)
})

const topTension = computed(() => {
  return teamMetrics.value.filter(m => m.isTensionPoint)
})
</script>

<template>
  <div class="space-y-6">
    <!-- Team Builder Bar -->
    <div class="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
      <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 mb-4 border-b border-slate-100">
        <div>
          <div class="flex items-center gap-2">
            <Users class="w-5 h-5 text-indigo-600" />
            <h3 class="text-lg font-bold text-slate-900">Multicultural Team Simulator</h3>
          </div>
          <p class="text-xs text-slate-500 mt-0.5">
            Assemble your international team to diagnose cultural spread and friction areas
          </p>
        </div>

        <!-- Presets -->
        <div class="flex items-center gap-2">
          <span class="text-xs text-slate-400 font-medium">Quick Teams:</span>
          <button
            @click="loadPreset('tech')"
            class="px-2.5 py-1 text-xs rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 font-medium"
          >
            Global Tech
          </button>
          <button
            @click="loadPreset('europe')"
            class="px-2.5 py-1 text-xs rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 font-medium"
          >
            Pan-European
          </button>
          <button
            @click="loadPreset('asia-pacific')"
            class="px-2.5 py-1 text-xs rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 font-medium"
          >
            Asia-Pacific
          </button>
        </div>
      </div>

      <!-- Add Member Form -->
      <div class="flex flex-wrap items-center gap-3">
        <select
          v-model="selectedCountryToAdd"
          class="text-xs font-semibold bg-white border border-slate-300 rounded-xl px-3 py-2 focus:ring-2 focus:ring-indigo-500"
        >
          <option v-for="c in countries" :key="c.id" :value="c.id">
            {{ c.flag }} {{ c.name }}
          </option>
        </select>

        <input
          v-model="memberRoleToAdd"
          type="text"
          placeholder="Role (e.g. Lead Dev, Designer)"
          class="text-xs bg-white border border-slate-300 rounded-xl px-3 py-2 focus:ring-2 focus:ring-indigo-500 w-48"
          @keyup.enter="addMember"
        />

        <button
          @click="addMember"
          class="px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 text-white hover:bg-indigo-700 transition-colors flex items-center gap-1.5 shadow-xs"
        >
          <Plus class="w-4 h-4" />
          <span>Add Member</span>
        </button>
      </div>

      <!-- Member Tags List -->
      <div class="flex flex-wrap gap-2.5 mt-4">
        <div
          v-for="member in teamMembers"
          :key="member.id"
          class="flex items-center gap-2 pl-3 pr-2 py-1.5 rounded-xl border border-slate-200 bg-slate-50/70 text-xs shadow-2xs group"
        >
          <span class="text-base">{{ getCountry(member.countryId).flag }}</span>
          <div>
            <div class="font-bold text-slate-800 leading-tight">
              {{ getCountry(member.countryId).name }}
            </div>
            <div class="text-[10px] text-slate-500">{{ member.role }}</div>
          </div>
          <button
            @click="removeMember(member.id)"
            class="ml-1 text-slate-400 hover:text-red-600 p-1 rounded-md transition-colors"
            title="Remove member"
          >
            <Trash2 class="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>

    <!-- Team Tension Diagnosis & Advice -->
    <div v-if="topTension.length > 0" class="p-5 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs">
      <div class="flex items-center gap-2 font-bold text-amber-900 mb-2 text-sm">
        <AlertCircle class="w-5 h-5 text-amber-600" />
        <span>Significant Cultural Variance Detected</span>
      </div>
      <p class="text-amber-800 text-xs leading-relaxed mb-3">
        Your team spans a wide delta (&ge; 4.0 points) across {{ topTension.length }} of the 8 scales.
        According to Erin Meyer, multicultural teams without explicit communication protocols frequently misinterpret intent.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div
          v-for="t in topTension"
          :key="t.scale.id"
          class="bg-white/80 p-3 rounded-xl border border-amber-200"
        >
          <div class="font-bold text-slate-900 flex items-center justify-between mb-1">
            <span>{{ t.scale.name }}</span>
            <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-bold">
              Spread: {{ t.delta.toFixed(1) }} pts
            </span>
          </div>
          <p class="text-[11px] text-slate-600">
            {{ t.scale.practicalTip }}
          </p>
        </div>
      </div>
    </div>

    <!-- Team Dispersion Across All 8 Scales -->
    <div class="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-6 space-y-6">
      <div class="border-b border-slate-100 pb-3">
        <h4 class="font-bold text-slate-900 text-base">Team Distribution Along Each Scale</h4>
        <p class="text-xs text-slate-500">Each member's position plotted on the scale spectrum</p>
      </div>

      <div class="space-y-6">
        <div
          v-for="item in teamMetrics"
          :key="item.scale.id"
          class="border-b border-slate-100 pb-5 last:border-b-0"
        >
          <div class="flex items-center justify-between text-xs mb-1">
            <span class="font-bold text-slate-900 flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full" :style="{ backgroundColor: item.scale.color }"></span>
              {{ item.scale.name }}
            </span>
            <div class="flex items-center gap-3 font-mono text-[11px]">
              <span class="text-slate-500">Avg: <strong class="text-slate-800">{{ item.avg }}</strong></span>
              <span
                class="px-2 py-0.5 rounded font-bold"
                :class="item.isTensionPoint ? 'bg-red-100 text-red-800' : 'bg-slate-100 text-slate-700'"
              >
                Range: {{ item.min.toFixed(1) }} - {{ item.max.toFixed(1) }} (Δ {{ item.delta.toFixed(1) }})
              </span>
            </div>
          </div>

          <!-- The Team Spectrum Line -->
          <div class="relative pt-6 pb-6 px-2">
            <div class="h-2 w-full bg-slate-200 rounded-full relative">
              <!-- Span highlighting range -->
              <div
                class="absolute h-full rounded-full opacity-35"
                :style="{
                  left: `${item.min * 10}%`,
                  width: `${item.delta * 10}%`,
                  backgroundColor: item.scale.color
                }"
              ></div>
            </div>

            <!-- Member Pins -->
            <div
              v-for="score in item.scores"
              :key="score.memberId"
              class="absolute top-1 -translate-x-1/2 cursor-pointer group hover:z-30"
              :style="{ left: `${score.score * 10}%` }"
            >
              <div class="flex flex-col items-center">
                <span class="text-sm shadow-xs transition-transform group-hover:scale-125">
                  {{ score.country.flag }}
                </span>
                <div class="w-0.5 h-3 bg-slate-400 group-hover:bg-indigo-600"></div>
              </div>

              <!-- Tooltip -->
              <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:block bg-slate-900 text-white text-[10px] p-2 rounded-md shadow-lg whitespace-nowrap z-40">
                <div class="font-bold">{{ score.country.name }} ({{ score.score }}/10)</div>
                <div class="text-slate-400">{{ score.role }}</div>
              </div>
            </div>

            <!-- Poles -->
            <div class="flex justify-between text-[10px] text-slate-400 mt-2">
              <span>{{ item.scale.leftPole }}</span>
              <span>{{ item.scale.rightPole }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Suggested Team Working Charter (Erin Meyer Best Practices) -->
    <div class="bg-slate-900 text-white p-6 rounded-2xl shadow-md">
      <div class="flex items-center gap-2 mb-3">
        <Sparkles class="w-5 h-5 text-indigo-400" />
        <h4 class="font-bold text-base">Recommended Team Working Agreement</h4>
      </div>
      <p class="text-xs text-slate-300 mb-4 leading-relaxed">
        Based on Erin Meyer's consulting framework with multicultural executives, here are the 3 foundational agreements this team should adopt:
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
        <div class="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700">
          <div class="font-bold text-indigo-300 mb-1">1. Explicit Feedback Code</div>
          <p class="text-slate-300 text-[11px] leading-relaxed">
            Direct feedback members must agree not to give unbuffered public criticism to members from indirect cultures. Indirect members should agree to state concerns directly in private 1-on-1s.
          </p>
        </div>

        <div class="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700">
          <div class="font-bold text-indigo-300 mb-1">2. Meeting & Debate Protocol</div>
          <p class="text-slate-300 text-[11px] leading-relaxed">
            Separate brainstorming debate ("devil's advocate") from decision lock-in. Allow high-context and consensus members to review documents 24 hours prior so everyone participates equally.
          </p>
        </div>

        <div class="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700">
          <div class="font-bold text-indigo-300 mb-1">3. Multi-Context Recaps</div>
          <p class="text-slate-300 text-[11px] leading-relaxed">
            Always recap agreements in written bullet points (low-context bridge), while investing in periodic informal catch-ups to sustain relational trust.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
