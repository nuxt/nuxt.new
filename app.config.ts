export default defineAppConfig({
    ui: {
      primary: 'green',
      gray: 'slate',
      button: {
        color: {
          primary: {
            outline: 'bg-gray-950 border border-[0.5px] border-primary-400 text-gray-300 disabled:bg-gray-700 hover:bg-gray-900 focus-visible:ring-2 focus-visible:ring-gray-400 transition-all duration-200'
          },
          gray: {
            outline: 'bg-gradient-to-b from-gray-800/50 to-gray-900/50 border border-gray-700 text-gray-300 disabled:bg-transparent hover:bg-gray-900 hover:border-gray-500 disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-gray-400 transition-color duration-200',
            link: 'text-gray-300 hover:text-gray-200 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-300'
          },
          blur: {
            outline: 'z-20 hover:bg-white/30 bg-white/10 border border-white/20 backdrop-blur-sm text-white disabled:bg-gray-700 hover:bg-gray-900 focus-visible:ring-2 focus-visible:ring-gray-400 transition-all duration-200'
          }
        }
      },
      table: {
        divide: 'divide-y divide-gray-700',
        tbody: 'divide-y divide-gray-800',
        tr: {
          selected: 'bg-gray-800/50'
        },
        th: {
          base: 'text-left rtl:text-right',
          padding: 'px-3 py-3.5',
          color: 'text-gray-200',
          font: 'font-semibold',
          size: 'text-sm'
        },
        td: {
          color: 'text-gray-300',
        },
      },
      badge: {
        color: {
          primary: {
            solid: 'bg-primary-400/10 text-primary-400 ring-1 ring-inset ring-primary-400 ring-opacity-10 dark:ring-opacity-20'
          }
        },
        size: {
          md: 'text-base px-2 py-1',
        },
      },
      popover: {
        popper: {
          placement: 'bottom-start'
        }
      }
    },
  })
