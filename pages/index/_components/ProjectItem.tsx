interface Props {
  data: {
    name: string
    desc: string
    link: string
    icon: string
  }
}

export default (props: Props) => {
  const { data } = props
  return (
    <a
      class="px-4 py-3 rounded-md transition-colors decoration-none bg-gray-50/10 hover:bg-gray-50/20"
      href={data.link}
      target="_blank"
    >
      <div class="flex h-full items-center justify-center text-white">
        <div mr-4 text-4xl>
          <div class={data.icon} />
        </div>
        <div flex-1>
          <div font-medium leading-relaxed>{data.name}</div>
          <div op-50 font-normal text-sm>{data.desc}</div>
        </div>
      </div>
    </a>
  )
}
