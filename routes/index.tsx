import { useSignal } from "@preact/signals";
import { Form } from "../components/Form.tsx";
import { Chatbox } from "../islands/Chatbox.tsx";

export default function Home() {
  return (
    <div class="flex flex-col items-center justify-center h-[92vh] p-4">
      <Chatbox />
    </div>
  );
}
