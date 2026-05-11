import { FaGithub } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-white border-t mt-20">
      <div className="max-w-6xl mx-auto px-5 py-8 flex justify-between items-start">

        <div>
          <h2 className="text-xl font-semibold">Community Marketplace</h2>
          <p className="text-gray-500 text-sm mt-2 max-w-sm">
            Connecting people with trusted services for everyday needs.
          </p>
        </div>

        <div className="text-right">
          <h3 className="font-semibold mb-2">Contact</h3>
          <p className="text-gray-500 text-sm">
            support@marketplace.com
          </p>
        </div>

      </div>

      <div className="text-center text-gray-400 text-sm py-4 border-t flex items-center justify-center gap-2">
        © {new Date().getFullYear()} Marketplace • Built by Rishikesh Masurkar

        <a
          href="https://github.com/mrishikesh07"
          target="_blank"
          rel="noreferrer"
          className="text-black hover:text-gray-700 transition"
        >
          <FaGithub size={18} />
        </a>
      </div>
    </footer>
  );
}