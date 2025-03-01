import user_info from "../../data/user_info.js";
import { DiGithubBadge } from "react-icons/di";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <section id="contact" className="mt-16 pt-12 px-6 lg:px-24">
      {/* =========== TITLE =========== */}
      <h4 className="text-5xl font-bold text-zinc-900 dark:text-zinc-100">연락처</h4>

      {/* =========== DESCCRIPTION =========== */}
      <p className="mt-8 leading-7 text-base text-zinc-600 dark:text-zinc-300 font-light">
        {user_info.contact.description}
      </p>

      {/* =========== GITHUB =========== */}
      <a
        target="_blank"
        href={user_info.contact.github}
        className="flex mt-6 text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300 gap-4 hover:text-zinc-700 transition-all duration-30"
      >
        <DiGithubBadge className="self-center text-lg text-red-800 dark:text-red-500" />
        <span>{user_info.contact.github}</span>
      </a>

      {/* =========== EMAIL =========== */}
      <a
        href={`mailto:${user_info.contact.email}`}
        className="flex mt-6 text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300 gap-4 hover:text-zinc-700 transition-all duration-30"
      >
        <MdEmail className="self-center text-lg text-red-800 dark:text-red-500" />
        <span>{user_info.contact.email}</span>
      </a>
    </section>
  );
}

export default Contact;
