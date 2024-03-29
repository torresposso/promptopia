export function ModelMessage(message: string) {
  return (
    <div class="model-message">
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
  );
}
