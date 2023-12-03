export async function load({ params }) {
    const id = params.id;
    return {
        props: {
            playlistdata: {
                id
            }
        }
    };
}