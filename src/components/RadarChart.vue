<script setup>
import { computed } from 'vue'

const props = defineProps({
  countries: {
    type: Array,
    required: true // Array of { name, flag, color, scores }
  },
  scales: {
    type: Array,
    required: true
  },
  size: {
    type: Number,
    default: 380
  }
})

const center = computed(() => props.size / 2)
const radius = computed(() => (props.size / 2) - 45)

const angleStep = computed(() => (Math.PI * 2) / props.scales.length)

// Calculate point coordinates for a given scale index and value (0-10)
function getCoordinates(index, value) {
  const angle = (index * angleStep.value) - (Math.PI / 2) // Start at top
  const r = (value / 10) * radius.value
  return {
    x: center.value + (r * Math.cos(angle)),
    y: center.value + (r * Math.sin(angle))
  }
}

// Circular grid levels (2, 4, 6, 8, 10)
const gridLevels = [2, 4, 6, 8, 10]

// Spoke axis endpoints
const axes = computed(() => {
  return props.scales.map((scale, i) => {
    const end = getCoordinates(i, 10)
    const labelPos = getCoordinates(i, 11.8)
    return {
      scale,
      x2: end.x,
      y2: end.y,
      labelX: labelPos.x,
      labelY: labelPos.y
    }
  })
})

// Generate polygon SVG path for a country
function getPolygonPath(country) {
  if (!country || !country.scores) return ''
  const points = props.scales.map((scale, i) => {
    const val = country.scores[scale.id] ?? 5
    const pt = getCoordinates(i, val)
    return `${pt.x},${pt.y}`
  })
  return points.join(' ')
}
</script>

<template>
  <div class="relative flex flex-col items-center select-none">
    <svg :width="size" :height="size" class="overflow-visible">
      <defs>
        <radialGradient id="radarBg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#f8fafc" />
          <stop offset="100%" stop-color="#f1f5f9" />
        </radialGradient>
      </defs>

      <!-- Outer background circle -->
      <circle :cx="center" :cy="center" :r="radius" fill="url(#radarBg)" stroke="#e2e8f0" stroke-width="1.5" />

      <!-- Concentric grid rings -->
      <g v-for="level in gridLevels" :key="level">
        <polygon
          :points="scales.map((_, i) => {
            const p = getCoordinates(i, level);
            return `${p.x},${p.y}`
          }).join(' ')"
          fill="none"
          stroke="#cbd5e1"
          :stroke-width="level === 10 ? 1.5 : 0.75"
          :stroke-dasharray="level === 10 ? 'none' : '3,3'"
        />
        <!-- Level number marker -->
        <text
          :x="center"
          :y="center - (level / 10 * radius) + 3"
          text-anchor="middle"
          class="text-[9px] fill-slate-400 font-mono font-medium"
        >
          {{ level }}
        </text>
      </g>

      <!-- Spokes (axes) -->
      <g v-for="(axis, i) in axes" :key="axis.scale.id">
        <line
          :x1="center"
          :y1="center"
          :x2="axis.x2"
          :y2="axis.y2"
          stroke="#cbd5e1"
          stroke-width="1"
        />

        <!-- Scale label -->
        <text
          :x="axis.labelX"
          :y="axis.labelY"
          text-anchor="middle"
          dominant-baseline="central"
          class="text-[11px] font-semibold fill-slate-700 tracking-tight"
        >
          {{ axis.scale.shortName }}
        </text>
      </g>

      <!-- Country Polygons -->
      <g v-for="c in countries" :key="c.name">
        <!-- Area fill -->
        <polygon
          :points="getPolygonPath(c)"
          :fill="c.color"
          fill-opacity="0.22"
          :stroke="c.color"
          stroke-width="2.5"
          class="transition-all duration-300 hover:fill-opacity-35"
        />

        <!-- Node dots -->
        <circle
          v-for="(scale, idx) in scales"
          :key="scale.id"
          :cx="getCoordinates(idx, c.scores[scale.id] ?? 5).x"
          :cy="getCoordinates(idx, c.scores[scale.id] ?? 5).y"
          :r="4"
          :fill="c.color"
          stroke="#ffffff"
          stroke-width="2"
        />
      </g>
    </svg>

    <!-- Legend -->
    <div class="flex flex-wrap items-center justify-center gap-4 mt-3">
      <div
        v-for="c in countries"
        :key="c.name"
        class="flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-semibold bg-white border shadow-sm"
      >
        <span class="w-2.5 h-2.5 rounded-full" :style="{ backgroundColor: c.color }"></span>
        <span>{{ c.flag }} {{ c.name }}</span>
      </div>
    </div>
  </div>
</template>
