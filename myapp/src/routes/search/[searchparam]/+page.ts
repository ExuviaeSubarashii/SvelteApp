export async function load({ params }) {
    const param = params.searchparam;
    return {
        props: {
            searchdata: {
                param
            }
        }
    };
}