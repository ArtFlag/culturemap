<script setup>
import { CULTURAL_CONCEPTS } from '../data/cultureData.js'
import {
  Compass,
  ShieldCheck,
  Layers,
  Volume2,
  Workflow,
  Eye,
  BookOpen
} from 'lucide-vue-next'

const iconMap = {
  Compass,
  ShieldCheck,
  Layers,
  Volume2,
  Workflow,
  Eye
}

// Real-world examples of Upgraders vs Downgraders from the book
const upgraderDowngraderExamples = [
  {
    culture: 'Direct (e.g. Netherlands, Germany, France)',
    type: 'Upgraders',
    examples: [
      '“This is absolutely wrong.”',
      '“Your report is totally unacceptable.”',
      '“We completely disagree with this approach.”',
      '“This is a serious problem.”'
    ],
    intent: 'Strengthens the critique so there is zero ambiguity.'
  },
  {
    culture: 'Indirect / Anglo-Saxon (e.g. UK, US, Canada)',
    type: 'Downgraders',
    examples: [
      '“Perhaps you could consider another approach...”',
      '“I only have a couple of small minor thoughts.”',
      '“It’s sort of a bit tricky in places.”',
      '“With the greatest respect, that might be challenging.”'
    ],
    intent: 'Softens the blow to protect interpersonal harmony and ego.'
  }
]

// The famous British to American/Dutch translation guide from Erin Meyer
const angloTranslationGuide = [
  {
    britishSays: '“I hear what you say.”',
    foreignerUnderstands: '“He accepts my point of view.”',
    britishActuallyMeans: '“I disagree and do not want to discuss it any further.”'
  },
  {
    britishSays: '“With the greatest respect...”',
    foreignerUnderstands: '“He is listening to me respectfully.”',
    britishActuallyMeans: '“I think you are wrong or foolish.”'
  },
  {
    britishSays: '“That is not bad.”',
    foreignerUnderstands: '“It’s mediocre or barely adequate.”',
    britishActuallyMeans: '“That’s very good!”'
  },
  {
    britishSays: '“Quite good.”',
    foreignerUnderstands: '“Quite good = very good.”',
    britishActuallyMeans: '“A bit disappointing.”'
  },
  {
    britishSays: '“Could we consider some other options?”',
    foreignerUnderstands: '“They haven’t decided yet.”',
    britishActuallyMeans: '“I do not like your idea at all.”'
  }
]
</script>

<template>
  <div class="space-y-8">
    <!-- Intro Banner -->
    <div class="bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 text-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
      <div class="relative z-10 max-w-3xl">
        <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 font-semibold text-xs border border-indigo-400/30 mb-3">
          <BookOpen class="w-3.5 h-3.5" />
          <span>Core Mental Models from Erin Meyer</span>
        </div>
        <h2 class="text-2xl md:text-3xl font-extrabold tracking-tight mb-3">
          The Invisible Boundaries of Global Business
        </h2>
        <p class="text-slate-300 text-sm leading-relaxed">
          Cultural differences are not about stereotypes; they are about **relative behavioral systems**.
          Below are the key conceptual frameworks Erin Meyer uses to explain cross-border misunderstandings.
        </p>
      </div>
    </div>

    <!-- Core Conceptual Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="concept in CULTURAL_CONCEPTS"
        :key="concept.title"
        class="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
      >
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100">
              <component :is="iconMap[concept.icon] || Compass" class="w-5 h-5" />
            </span>
            <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
              {{ concept.tag }}
            </span>
          </div>

          <h3 class="font-bold text-slate-900 text-base mb-1.5">
            {{ concept.title }}
          </h3>
          <p class="text-xs font-semibold text-indigo-600 mb-3 leading-snug">
            {{ concept.summary }}
          </p>
          <p class="text-xs text-slate-600 leading-relaxed">
            {{ concept.description }}
          </p>
        </div>
      </div>
    </div>

    <!-- Upgraders & Downgraders Linguistic Breakdown -->
    <div class="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs">
      <div class="max-w-2xl mb-6">
        <h3 class="text-lg font-bold text-slate-900 flex items-center gap-2">
          <Volume2 class="w-5 h-5 text-indigo-600" />
          <span>Linguistic Modifiers: Upgraders vs. Downgraders</span>
        </h3>
        <p class="text-xs text-slate-500 mt-1">
          In cross-cultural feedback, the exact vocabulary modifiers chosen signal how seriously to interpret a criticism.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="box in upgraderDowngraderExamples"
          :key="box.type"
          class="p-5 rounded-xl border"
          :class="box.type === 'Upgraders' ? 'bg-red-50/50 border-red-200' : 'bg-blue-50/50 border-blue-200'"
        >
          <div class="flex items-center justify-between mb-3">
            <h4 class="font-bold text-sm text-slate-900">{{ box.type }}</h4>
            <span class="text-[11px] font-medium text-slate-500">{{ box.culture }}</span>
          </div>
          <p class="text-xs text-slate-600 mb-3 font-medium">{{ box.intent }}</p>
          <ul class="space-y-1.5 text-xs text-slate-800 font-mono">
            <li v-for="ex in box.examples" :key="ex" class="bg-white/80 p-2 rounded-lg border border-slate-200">
              {{ ex }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Famous Anglo Translation Guide Table -->
    <div class="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
      <div class="p-6 border-b border-slate-100 bg-slate-50/50">
        <h3 class="font-bold text-slate-900 text-base">
          Meyer's Iconic Cross-Cultural Translation Guide
        </h3>
        <p class="text-xs text-slate-500 mt-0.5">
          How subtle British downgraders and irony cause hilarious (and dangerous) misunderstandings abroad
        </p>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full text-left text-xs">
          <thead class="bg-slate-100/80 text-slate-700 font-bold uppercase tracking-wider text-[10px]">
            <tr>
              <th class="p-3.5">What the British Colleague Says</th>
              <th class="p-3.5">What an American or European Hears</th>
              <th class="p-3.5">What the British Colleague Actually Means</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100">
            <tr v-for="row in angloTranslationGuide" :key="row.britishSays" class="hover:bg-slate-50/70">
              <td class="p-3.5 font-bold text-slate-900">{{ row.britishSays }}</td>
              <td class="p-3.5 text-slate-600">{{ row.foreignerUnderstands }}</td>
              <td class="p-3.5 font-semibold text-indigo-700 bg-indigo-50/30">{{ row.britishActuallyMeans }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
