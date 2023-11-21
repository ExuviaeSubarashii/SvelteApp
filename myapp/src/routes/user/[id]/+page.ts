// Your SvelteKit page (e.g., user/[id].svelte)
export async function load({ params }) {
    const id = params.id;
    return {
        props: {
            userdata: {
                id
            }
        }
    };
}
