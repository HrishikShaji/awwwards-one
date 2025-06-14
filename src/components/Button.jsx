export default function Button(props) {
  const { title, id, rightIcon, leftIcon, containerClass } = props
  return <button id={id} className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}>
    {leftIcon}
    <span className="relative inline-flex overflow-hidden text-xs uppercase">
      <div>{title}</div>
    </span>
    {rightIcon}
  </button>
}
