const variants = [{
  label: "live",
  path: "/"
}, {
  label: "draft",
  path: "/draft"
}, {
  label: "draft2",
  path: "/draft2"
}, {
  label: "draft3",
  path: "/draft3"
}];

const DraftBanner = ({ current, note }: { current: string; note: string }) => {
  return <div className="fixed top-0 inset-x-0 z-50 bg-card/80 backdrop-blur-sm border-b border-border/40 px-6 py-2 text-center">
      <p className="text-ethereal text-xs">
        {note}
        <span className="mx-2 opacity-40">|</span>
        {variants.map((v, i) => <span key={v.path}>
            {v.path === current
              ? <span className="text-cosmic font-medium">{v.label}</span>
              : <a href={v.path} className="text-primary hover:text-primary/80 underline transition-colors">{v.label}</a>}
            {i < variants.length - 1 && <span className="opacity-40"> · </span>}
          </span>)}
      </p>
    </div>;
};
export default DraftBanner;
