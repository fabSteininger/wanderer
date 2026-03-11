import { handleError } from "$lib/util/api_util";
import { json, type RequestEvent } from "@sveltejs/kit";

export async function POST(event: RequestEvent) {
    try {
        const data = await event.request.json()
        const r = await event.locals.ms.multiSearch({
            queries: data.queries
        });
        return json(r);
    } catch (e: any) {
        return handleError(e)
    }
}