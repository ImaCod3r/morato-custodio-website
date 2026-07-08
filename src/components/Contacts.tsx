import Title from "./ui/Title";
import Input from "./ui/Input";
import TextArea from "./ui/TextArea";
import Button from "./ui/Button";
import Reveal from "./ui/Reveal";
import { data } from "../constants";

function Contacts() {
    const { subtitle, title, description, form } = data.contacts;

    return (
        <section id="contacts" className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-24 md:py-28">
            <Reveal>
                <Title title={title} subtitle={subtitle} />
            </Reveal>

            <Reveal delay={0.1}>
                <p className="mt-6 md:max-w-150 text-center">{description}</p>
            </Reveal>

            <Reveal delay={0.15} className="w-full md:max-w-150 mt-10">
            <form action="/" className="w-full flex flex-col gap-4">
                <Input type="text" name="name" placeholder={form.namePlaceholder} required />
                <Input type="email" name="email" placeholder={form.emailPlaceholder} required />
                <TextArea name="message" placeholder={form.messagePlaceholder} rows={5} required />
                <Button type="submit">{form.submitLabel}</Button>
            </form>
            </Reveal>
        </section>
    )
}

export default Contacts;