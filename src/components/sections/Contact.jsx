import user_info from "../../data/user_info.js";
import { SiGithub, SiMailboxdotorg } from "react-icons/si";

function Contact() {
  return (
    <section id="contact" className="mx-4 lg:mx-20">
      <h4 className="text-5xl font-bold text-zinc-900 mt-20 dark:text-zinc-100">연락처</h4>

      <div className="flex flex-col gap-4 mt-8">
        {/* =========== GITHUB =========== */}
        <a
          target="_blank"
          href={user_info.contact.github}
          className="flex text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-200 gap-4 hover:text-zinc-700 transition-all duration-30"
        >
          <SiGithub className="self-center text-lg text-red-800 dark:text-red-500" />
          <span>{user_info.contact.github}</span>
        </a>

        {/* =========== EMAIL =========== */}
        <a
          href={`mailto:${user_info.contact.email}`}
          className="flex text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-200 gap-4 hover:text-zinc-700 transition-all duration-30"
        >
          <SiMailboxdotorg className="self-center text-base text-red-800 dark:text-red-500" />
          <span>{user_info.contact.email}</span>
        </a>
      </div>
    </section>
  );
}

export default Contact;
