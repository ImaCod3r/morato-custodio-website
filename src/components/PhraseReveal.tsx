import { TextReveal } from "./ui/TextReveal"
import { data } from "../constants";

function PhraseReveal() {
    return (
        <section id="phrase-reveal" className="w-full flex flex-col items-center justify-center">
            <TextReveal>{data.phraseReveal.phrase}</TextReveal>
        </section>
    )
}

export default PhraseReveal;