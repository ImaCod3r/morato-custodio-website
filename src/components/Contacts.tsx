import Title from "./ui/Title";
import Input from "./ui/Input";
import TextArea from "./ui/TextArea";
import Button from "./ui/Button";

function Contacts() {
    return (
        <section id="contacts" className="w-full min-h-screen flex flex-col items-center justify-center">
            <Title title="contacto" subtitle="entre em" />

            <p className="mt-6 md:max-w-150 text-center">Preencha o formulário para entrar em contacto comigo por e-mail ou acesse as minhas redes sociais abaixo.</p>

            <form action="/" className="w-full md:max-w-150 flex flex-col gap-4 mt-10">
                <Input type="text" name="name" placeholder="Nome e sobrenome" required />
                <Input type="email" name="email" placeholder="Endereço de e-mail" required />
                <TextArea name="message" placeholder="Mensagem..." rows={5} required />
                <Button type="submit">Submeter</Button>
            </form>
        </section>
    )
}

export default Contacts;