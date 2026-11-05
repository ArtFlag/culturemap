<script setup>
import { ref, computed } from 'vue'
import {
  SCALES,
  COUNTRIES,
  REGIONS,
  QUADRANTS,
  CULTURAL_CONCEPTS
} from './data/cultureData.js'

import ScaleBar from './components/ScaleBar.vue'
import RadarChart from './components/RadarChart.vue'
import QuadrantPlot from './components/QuadrantPlot.vue'
import CountryDetailModal from './components/CountryDetailModal.vue'
import ComparisonView from './components/ComparisonView.vue'
import TeamSimulator from './components/TeamSimulator.vue'
import ConceptsView from './components/ConceptsView.vue'

import {
  Sliders,
  Globe,
  ArrowLeftRight,
  Grid,
  Users,
  BookOpen,
  Search,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Info
} from 'lucide-vue-next'

// Active Navigation Tab
const activeTab = ref('scales') // 'scales' | 'countries' | 'compare' | 'quadrants' | 'team' | 'concepts'

// Region Filter
const selectedRegion = ref('All')

// Search Term
const searchQuery = ref('')

// Selected Country for Modal Detail
const selectedCountry = ref(null)

// Comparison State
const comparisonCountryA = ref('us')
const comparisonCountryB = ref('fr')

// Active Quadrant in 2x2 View
const activeQuadrantId = ref('comm-eval')

// Filtered Countries based on Region and Search
const filteredCountries = computed(() => {
  return COUNTRIES.filter(c => {
    const matchesRegion = selectedRegion.value === 'All' || c.region === selectedRegion.value
    const matchesSearch = !searchQuery.value ||
      c.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      c.code.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      c.region.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      c.keyInsights.some(i => i.toLowerCase().includes(searchQuery.value.toLowerCase()))
    return matchesRegion && matchesSearch
  })
})

const activeQuadrant = computed(() => {
  return QUADRANTS.find(q => q.id === activeQuadrantId.value) || QUADRANTS[0]
})

function openCountryDetail(country) {
  selectedCountry.value = country
}

function handleCompareFromModal(country) {
  comparisonCountryA.value = country.id
  // Pick a contrasting country
  comparisonCountryB.value = country.id === 'us' ? 'fr' : 'us'
  selectedCountry.value = null
  activeTab.value = 'compare'
}

function handleAddToTeamFromModal(country) {
  selectedCountry.value = null
  activeTab.value = 'team'
}
</script>

<template>
  <div class="min-h-screen bg-slate-50 text-slate-800 flex flex-col">
    <!-- Top Navigation Header -->
    <header class="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-2xs">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 gap-4">
          <!-- Logo & Title -->
          <div class="flex items-center gap-3 cursor-pointer" @click="activeTab = 'scales'">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-indigo-800 text-white flex items-center justify-center font-bold shadow-sm shadow-indigo-200">
              <span class="text-xl">🧭</span>
            </div>
            <div>
              <div class="flex items-center gap-2">
                <h1 class="font-extrabold text-slate-900 text-base sm:text-lg tracking-tight">The Culture Map</h1>
                <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100 hidden sm:inline-block">
                  Erin Meyer Model
                </span>
              </div>
              <p class="text-[11px] text-slate-500 hidden sm:block">
                Navigating the 8 Scales of Cross-Cultural Management
              </p>
            </div>
          </div>

          <!-- Navigation Tabs -->
          <nav class="hidden md:flex items-center gap-1">
            <button
              @click="activeTab = 'scales'"
              class="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5"
              :class="activeTab === 'scales' ? 'bg-indigo-600 text-white shadow-2xs' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'"
            >
              <Sliders class="w-3.5 h-3.5" />
              <span>8 Scales</span>
            </button>

            <button
              @click="activeTab = 'countries'"
              class="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5"
              :class="activeTab === 'countries' ? 'bg-indigo-600 text-white shadow-2xs' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'"
            >
              <Globe class="w-3.5 h-3.5" />
              <span>Countries ({{ COUNTRIES.length }})</span>
            </button>

            <button
              @click="activeTab = 'compare'"
              class="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5"
              :class="activeTab === 'compare' ? 'bg-indigo-600 text-white shadow-2xs' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'"
            >
              <ArrowLeftRight class="w-3.5 h-3.5" />
              <span>Compare</span>
            </button>

            <button
              @click="activeTab = 'quadrants'"
              class="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5"
              :class="activeTab === 'quadrants' ? 'bg-indigo-600 text-white shadow-2xs' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'"
            >
              <Grid class="w-3.5 h-3.5" />
              <span>2x2 Matrices</span>
            </button>

            <button
              @click="activeTab = 'team'"
              class="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5"
              :class="activeTab === 'team' ? 'bg-indigo-600 text-white shadow-2xs' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'"
            >
              <Users class="w-3.5 h-3.5" />
              <span>Team Simulator</span>
            </button>

            <button
              @click="activeTab = 'concepts'"
              class="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5"
              :class="activeTab === 'concepts' ? 'bg-indigo-600 text-white shadow-2xs' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'"
            >
              <BookOpen class="w-3.5 h-3.5" />
              <span>Concepts</span>
            </button>
          </nav>

          <!-- Search Input -->
          <div class="relative w-40 sm:w-56">
            <Search class="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search country or trait..."
              class="w-full text-xs pl-9 pr-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
          </div>
        </div>

        <!-- Mobile Navigation Strip -->
        <div class="flex md:hidden overflow-x-auto py-2 gap-1 border-t border-slate-100">
          <button
            v-for="item in [
              { id: 'scales', label: '8 Scales', icon: Sliders },
              { id: 'countries', label: 'Countries', icon: Globe },
              { id: 'compare', label: 'Compare', icon: ArrowLeftRight },
              { id: 'quadrants', label: '2x2 Matrices', icon: Grid },
              { id: 'team', label: 'Team', icon: Users },
              { id: 'concepts', label: 'Concepts', icon: BookOpen }
            ]"
            :key="item.id"
            @click="activeTab = item.id"
            class="px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap flex items-center gap-1.5"
            :class="activeTab === item.id ? 'bg-indigo-600 text-white' : 'text-slate-600 hover:bg-slate-100'"
          >
            <component :is="item.icon" class="w-3 h-3" />
            <span>{{ item.label }}</span>
          </button>
        </div>
      </div>
    </header>

    <!-- Main Content Body -->
    <main class="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <!-- Global Region Filter Bar (Shown in Scales & Countries view) -->
      <div v-if="activeTab === 'scales' || activeTab === 'countries'" class="flex flex-wrap items-center justify-between gap-3 bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-2xs">
        <div class="flex items-center gap-1.5 overflow-x-auto">
          <span class="text-xs font-bold text-slate-500 uppercase tracking-wider mr-2 hidden sm:inline">Region:</span>
          <button
            v-for="region in REGIONS"
            :key="region"
            @click="selectedRegion = region"
            class="px-3 py-1 rounded-lg text-xs font-medium transition-all"
            :class="selectedRegion === region ? 'bg-slate-900 text-white shadow-2xs' : 'text-slate-600 hover:bg-slate-100'"
          >
            {{ region }}
          </button>
        </div>

        <div class="text-xs text-slate-500 font-medium">
          Showing <strong class="text-slate-900">{{ filteredCountries.length }}</strong> countries
        </div>
      </div>

      <!-- ============================================== -->
      <!-- TAB 1: 8 SCALES EXPLORER                       -->
      <!-- ============================================== -->
      <section v-if="activeTab === 'scales'" class="space-y-6">
        <!-- Scale Bar for each of the 8 scales -->
        <div class="grid grid-cols-1 gap-6">
          <ScaleBar
            v-for="scale in SCALES"
            :key="scale.id"
            :scale="scale"
            :countries="filteredCountries"
            @select-country="openCountryDetail"
          />
        </div>
      </section>

      <!-- ============================================== -->
      <!-- TAB 2: COUNTRY DIRECTORY                       -->
      <!-- ============================================== -->
      <section v-else-if="activeTab === 'countries'" class="space-y-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <div
            v-for="country in filteredCountries"
            :key="country.id"
            @click="openCountryDetail(country)"
            class="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-2xs hover:shadow-md hover:border-indigo-300 transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div class="flex items-center justify-between mb-3">
                <div class="flex items-center gap-2.5">
                  <span class="text-3xl">{{ country.flag }}</span>
                  <div>
                    <h3 class="font-bold text-slate-900 text-sm group-hover:text-indigo-600 transition-colors">
                      {{ country.name }}
                    </h3>
                    <span class="text-[10px] text-slate-400 font-medium">{{ country.region }}</span>
                  </div>
                </div>
                <span class="text-xs font-mono font-bold text-slate-400 bg-slate-50 px-2 py-0.5 rounded border">
                  {{ country.code }}
                </span>
              </div>

              <p class="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                {{ country.keyInsights[0] }}
              </p>

              <!-- Mini Scale Badges -->
              <div class="grid grid-cols-2 gap-1.5 text-[10px] font-mono mb-2">
                <div class="p-1 rounded bg-slate-50 border flex justify-between">
                  <span class="text-slate-500">Comm:</span>
                  <span class="font-bold text-slate-800">{{ country.scores.communicating.toFixed(1) }}</span>
                </div>
                <div class="p-1 rounded bg-slate-50 border flex justify-between">
                  <span class="text-slate-500">Feedback:</span>
                  <span class="font-bold text-slate-800">{{ country.scores.evaluating.toFixed(1) }}</span>
                </div>
                <div class="p-1 rounded bg-slate-50 border flex justify-between">
                  <span class="text-slate-500">Lead:</span>
                  <span class="font-bold text-slate-800">{{ country.scores.leading.toFixed(1) }}</span>
                </div>
                <div class="p-1 rounded bg-slate-50 border flex justify-between">
                  <span class="text-slate-500">Decide:</span>
                  <span class="font-bold text-slate-800">{{ country.scores.deciding.toFixed(1) }}</span>
                </div>
              </div>
            </div>

            <div class="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-indigo-600 font-semibold group-hover:translate-x-0.5 transition-transform">
              <span>View Full Profile</span>
              <ChevronRight class="w-4 h-4" />
            </div>
          </div>
        </div>
      </section>

      <!-- ============================================== -->
      <!-- TAB 3: COMPARE COUNTRIES                       -->
      <!-- ============================================== -->
      <section v-else-if="activeTab === 'compare'">
        <ComparisonView
          :countries="COUNTRIES"
          :initial-country-a="comparisonCountryA"
          :initial-country-b="comparisonCountryB"
        />
      </section>

      <!-- ============================================== -->
      <!-- TAB 4: 2X2 QUADRANT MATRICES                   -->
      <!-- ============================================== -->
      <section v-else-if="activeTab === 'quadrants'" class="space-y-6">
        <!-- Matrix Selector Tabs -->
        <div class="flex flex-wrap gap-2">
          <button
            v-for="q in QUADRANTS"
            :key="q.id"
            @click="activeQuadrantId = q.id"
            class="px-4 py-2 rounded-xl text-xs font-bold border transition-all"
            :class="activeQuadrantId === q.id
              ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'"
          >
            {{ q.title }}
          </button>
        </div>

        <QuadrantPlot
          :matrix="activeQuadrant"
          :countries="filteredCountries"
          :selected-country="selectedCountry"
          @select-country="openCountryDetail"
        />
      </section>

      <!-- ============================================== -->
      <!-- TAB 5: TEAM SIMULATOR                          -->
      <!-- ============================================== -->
      <section v-else-if="activeTab === 'team'">
        <TeamSimulator :countries="COUNTRIES" />
      </section>

      <!-- ============================================== -->
      <!-- TAB 6: CORE MEYER CONCEPTS                     -->
      <!-- ============================================== -->
      <section v-else-if="activeTab === 'concepts'">
        <ConceptsView />
      </section>
    </main>

    <!-- Country Profile Detail Modal -->
    <CountryDetailModal
      v-if="selectedCountry"
      :country="selectedCountry"
      @close="selectedCountry = null"
      @compare="handleCompareFromModal"
      @add-to-team="handleAddToTeamFromModal"
    />

    <!-- Footer -->
    <footer class="bg-white border-t border-slate-200/80 mt-16 py-8 text-xs text-slate-500">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span class="font-bold text-slate-800">The Culture Map Explorer</span> — Based on the research and methodology of <strong>Erin Meyer</strong> (INSEAD).
        </div>
        <div class="flex items-center gap-4 text-slate-400">
          <span>8 Scales Framework</span>
          <span>•</span>
          <span>30 Countries</span>
          <span>•</span>
          <span>Vue 3 + Vite</span>
        </div>
      </div>
    </footer>
  </div>
</template>
