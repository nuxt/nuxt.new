export default defineAppConfig({
  ui: {
    primary: 'green',
    gray: 'slate',
    table: {
      divide: 'divide-y divide-gray-700',
      tbody: 'divide-y divide-gray-800',
      tr: {
        selected: 'bg-gray-800/50',
      },
      th: {
        base: 'text-left rtl:text-right',
        padding: 'px-3 py-3.5',
        color: 'text-gray-200',
        font: 'font-semibold',
        size: 'text-sm',
      },
      td: {
        color: 'text-gray-300',
      },
    },
    badge: {
      size: {
        md: 'text-base px-2 py-1',
      },
    },
    popover: {
      popper: {
        placement: 'bottom-start',
      },
    },
  },
})
