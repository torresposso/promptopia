import { Form } from "../components/Form.tsx";

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
      <div class="bg-gradient-to-r from-blue-900 via-blue-600  to-blue-500 -mb-5 lg:-mb-8 z-10">
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
        <div class="chat-message">
          <div class="flex items-end">
            <div class="flex flex-col space-y-2  max-w-xs mx-2 order-2 items-start">
              <div>
                <span class="text-sm leading-tight px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gradient-to-bl from-sky-100 via-sky-100 to-sky-50 border border-sky-200 text-slate-600">
                  Can be verified on any platform using docker
                </span>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
              alt="My profile"
              class="w-6 h-6 rounded-full order-1"
            />
          </div>
        </div>
        <div class="chat-message">
          <div class="flex items-end justify-end">
            <div class="flex flex-col space-y-2  max-w-xs mx-2 order-1 items-end">
              <div class="px-4 py-2 rounded-lg flex flex-col rounded-br-none border border-sky-200 bg-gradient-to-br from-sky-200  via-sky-200  to-sky-100 text-slate-600">
                <span class="leading-tight text-sm">
                  Your error message says permission denied, npm global installs
                  must be given root privileges.
                </span>
              </div>
            </div>

            <img
              src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
              alt="My profile"
              class="w-6 h-6 rounded-full order-2"
            />
          </div>
        </div>
        <div class="chat-message">
          <div class="flex items-end">
            <div class="flex flex-col space-y-2  max-w-xs mx-2 order-2 items-start">
              <div>
                <span class="text-sm leading-tight px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gradient-to-bl from-sky-100 via-sky-100 to-sky-50 border border-sky-200 text-slate-600">
                  Can be verified on any platform using docker
                </span>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
              alt="My profile"
              class="w-6 h-6 rounded-full order-1"
            />
          </div>
        </div>
        <div class="chat-message">
          <div class="flex items-end justify-end">
            <div class="flex flex-col space-y-2  max-w-xs mx-2 order-1 items-end">
              <div class="px-4 py-2 rounded-lg flex flex-col rounded-br-none border border-sky-200 bg-gradient-to-br from-sky-200  via-sky-200  to-sky-100 text-slate-600">
                <span class="leading-tight text-sm">
                  Your error message says permission denied, npm global installs
                  must be given root privileges.
                </span>
              </div>
            </div>

            <img
              src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
              alt="My profile"
              class="w-6 h-6 rounded-full order-2"
            />
          </div>
        </div>
        <div class="chat-message">
          <div class="flex items-end justify-end">
            <div class="flex flex-col space-y-2  max-w-xs mx-2 order-1 items-end">
              <div class="px-4 py-2 rounded-lg flex flex-col rounded-br-none border border-sky-200 bg-gradient-to-br from-sky-200  via-sky-200  to-sky-100 text-slate-600">
                <span class="leading-tight text-sm">
                  Your error message says permission denied, npm global installs
                  must be given root privileges.
                </span>
              </div>
            </div>

            <img
              src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
              alt="My profile"
              class="w-6 h-6 rounded-full order-2"
            />
          </div>
        </div>
        <div class="chat-message">
          <div class="flex items-end justify-end">
            <div class="flex flex-col space-y-2  max-w-xs mx-2 order-1 items-end">
              <div class="px-4 py-2 rounded-lg flex flex-col rounded-br-none border border-sky-200 bg-gradient-to-br from-sky-200  via-sky-200  to-sky-100 text-slate-600">
                <span class="leading-tight text-sm">
                  Your error message says permission denied, npm global installs
                  must be given root privileges.
                </span>
              </div>
            </div>

            <img
              src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
              alt="My profile"
              class="w-6 h-6 rounded-full order-2"
            />
          </div>
        </div>
        <div class="chat-message">
          <div class="flex items-end justify-end">
            <div class="flex flex-col space-y-2  max-w-xs mx-2 order-1 items-end">
              <div class="px-4 py-2 rounded-lg flex flex-col rounded-br-none border border-sky-200 bg-gradient-to-br from-sky-200  via-sky-200  to-sky-100 text-slate-600">
                <span class="leading-tight text-sm">
                  Your error message says permission denied, npm global installs
                  must be given root privileges.
                </span>
              </div>
            </div>

            <img
              src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
              alt="My profile"
              class="w-6 h-6 rounded-full order-2"
            />
          </div>
        </div>
      </div>
      <div class="shadow-inner">
        <Form />
      </div>
    </div>
  );
}
