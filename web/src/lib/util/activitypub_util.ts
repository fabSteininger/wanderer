

export function splitUsername(handle: string, localDomain?: string) {
    const cleaned = handle.replace(/^@/, "").trim();

    let normalizedLocalDomain = localDomain;
    if (normalizedLocalDomain && normalizedLocalDomain.includes("://")) {
        normalizedLocalDomain = new URL(normalizedLocalDomain).hostname;
    }

    if (!cleaned.includes("@")) {
        return [cleaned, normalizedLocalDomain];
    }

    let [user, domain] = cleaned.split("@");

    return [user, domain]
}

export function isRemoteHandle(handle: string, origin: string) {
    const [, domain] = splitUsername(handle, origin);
    if (!domain) {
        return false;
    }
    let normalizedDomain = domain;
    try {
        normalizedDomain = new URL(`http://${domain}`).hostname;
    } catch {
        normalizedDomain = domain.split(":")[0];
    }
    normalizedDomain = normalizedDomain.replace(/^www\./, "");
    const localHost = new URL(origin).hostname.replace(/^www\./, "");
    return normalizedDomain.toLowerCase() !== localHost.toLowerCase();
}

export function handleFromRecordWithIRI(record: any) {
    if (!record.expand?.author) {
        throw new Error("object has no author info")
    }

    return formatHandle(record.expand.author);
}

export function formatHandle(actor: { preferred_username?: string; username?: string; isLocal?: boolean; domain?: string } | undefined | null) {
    if (!actor) {
        return "";
    }
    const username = actor.preferred_username || actor.username || "";
    if (actor.isLocal || actor.domain === "localhost") {
        return `@${username}`;
    }
    return `@${username}${actor.domain ? "@" + actor.domain : ""}`;
}
