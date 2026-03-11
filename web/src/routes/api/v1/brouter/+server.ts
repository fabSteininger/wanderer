import { env } from '$env/dynamic/public';
import { json, type RequestEvent } from "@sveltejs/kit";

export async function GET(event: RequestEvent) {
    const brouterUrlSetting = event.locals.settings?.behavior?.brouterUrl;

    if (!env.PUBLIC_BROUTER_URL && !brouterUrlSetting) {
        return json({ message: "BRouter URL not set" }, { status: 400 })
    }
    const url = new URL(event.request.url);
    const brouterUrl = new URL('/brouter', brouterUrlSetting || env.PUBLIC_BROUTER_URL);
    brouterUrl.search = url.search;

    try {
        const r = await event.fetch(brouterUrl.toString());
        const response = await r.json();
        if (!r.ok) {
            return json({ message: response }, { status: r.status })
        }
        return json(response);
    } catch (e: any) {
        return json({ message: e }, { status: 500 })
    }
}
