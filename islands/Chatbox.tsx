import { Form } from "./Form.tsx";

export function Chatbox() {
  return (
    <div class="rounded-lg h-full flex flex-col overflow-hidden bg-sky-100">
      <nav class="relative flex w-full flex-wrap items-center justify-between text-neutral-500 shadow-md  lg:py-4 bg-gradient-to-r from-blue-900 via-blue-600  to-blue-500 z-20">
        <div class="flex w-full flex-wrap items-center justify-between px-3">
          <div class="flex items-center gap-2 text-white py-2 lg:py-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
              class="w-10 h-10 lg:w-12 lg:h-12 rounded-full"
              alt="Avatar"
            />
            <div class="flex flex-col justify-end">
              <p class=" text-xs">Chat with</p>
              <p class=" text-lg font-semibold tracking-wider">Gemini</p>
            </div>
          </div>
        </div>
      </nav>
      <div class="bg-gradient-to-r from-blue-900 via-blue-600  to-blue-500 -mb-5 z-10">
        <p class="text-sm ml-4 pt-1 text-white">Online</p>
      </div>
      <div class="bg-gradient-to-r from-blue-900 via-blue-600  to-blue-500 ">
        <svg class="fill-sky-100" viewBox="0 0 1440 200">
          <path d="M0,160L48,144C96,128,192,96,288,101.3C384,107,480,149,576,165.3C672,181,768,171,864,154.7C960,139,1056,117,1152,122.7C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
          </path>
        </svg>
      </div>
      <div
        id="messages"
        class="flex flex-grow flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
      >
      </div>
      <div class="shadow-inner">
        <Form />
      </div>
    </div>
  );
}
