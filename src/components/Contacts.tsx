import Title from "./ui/Title";
import Input from "./ui/Input";
import TextArea from "./ui/TextArea";
import Button from "./ui/Button";
import Reveal from "./ui/Reveal";

function Contacts() {
    return (
        <section id="contacts" className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-24 md:py-28">
            <Reveal>
                <Title title="contacto" subtitle="entre em" />
            </Reveal>

            <Reveal delay={0.1}>
                <p className="mt-6 md:max-w-150 text-center">Preencha o formulário para entrar em contacto comigo por e-mail ou acesse as minhas redes sociais abaixo.</p>
            </Reveal>

            <Reveal delay={0.15} className="w-full md:max-w-150 mt-10">
            <form action="/" className="w-full flex flex-col gap-4">
                <Input type="text" name="name" placeholder="Nome e sobrenome" required />
                <Input type="email" name="email" placeholder="Endereço de e-mail" required />
                <TextArea name="message" placeholder="Mensagem..." rows={5} required />
                <Button type="submit">Submeter</Button>
            </form>
            </Reveal>
        </section>
    )
}

export default Contacts;