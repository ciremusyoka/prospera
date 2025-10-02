import { TITLE } from "@constant/constants.path";

export default function Footer() {
  return (
   <footer className="footer sm:footer-horizontal footer-center text-lg content p-4">
    <aside>
        <p className="text-black">Copyright © {new Date().getFullYear()} - All right reserved by {TITLE} Ltd</p>
    </aside>
    </footer>
  );
}
