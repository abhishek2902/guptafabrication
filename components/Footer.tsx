export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-white shadow flex justify-between items-center px-4 py-2 text-xs">
      {["रेलिंग", "दरवाजा", "चौखट", "और भी", "डिज़ाइन"].map((label, i) => (
        <p key={i} className="text-center font-bold">
          <a href="#"><i className={`fa-solid ${i === 4 ? 'fa-thumbs-up' : ''} text-lg`} /><br />{label}</a>
        </p>
      ))}
    </footer>
  )
}
