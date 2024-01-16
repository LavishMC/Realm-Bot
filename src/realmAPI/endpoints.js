export const RealmAPI = 'https://pocket.realms.minecraft.net/'
export const XboxAPI = 'https://profile.xboxlive.com/'

export const endpoints = {
    GET: {
        RealmPack: (id) => RealmAPI + `archive/upload/packs/${id}/1`,
        UploadURL: (id) => RealmAPI + `archive/upload/world/${id}/1`,
        RealmLatestBackup: (id, slot) => RealmAPI + `archive/download/world/${id}/${slot}/latest`,
        RealmBackups: (id) => RealmAPI + `worlds/${id}/backups`,
        RealmBackup: (id, slot, backupId) => RealmAPI + `archive/download/world/${id}/${slot}/${backupId}`,
        RealmInviteLink: (id) => RealmAPI + `links/v1?worldId=${id}`,
        RealmByInvite: (invite) => RealmAPI + `worlds/v1/link/${invite}`,
        UserCompatible: RealmAPI + "mco/client/compatible",
        UserTrial: RealmAPI + "trial/new",
        UserInvites: "invites/count/pending",
        LivePlayers: RealmAPI + "activities/live/players",
        Realms: RealmAPI + "worlds",
        Realm: (id) => RealmAPI + `worlds/${id}`,
        RealmJoinInfo: (id) => RealmAPI + `worlds/${id}/join`,
        RealmPacks: (id) => RealmAPI + `worlds/${id}/content`,
        RealmSubsciptionDetails: (id) => RealmAPI + `subscriptions/${id}/details`,
        RealmBlockedPlayers: (id) => RealmAPI + `worlds/${id}/blocklist`,
    },
    POST: {
        RealmBlockPlayer: (id, xuid) => RealmAPI + `worlds/${id}/blocklist/${xuid}`,
        RealmAcceptInvite: (invite) => RealmAPI + `worlds/v1/link/accept/${invite}`,
        RealmConfiguration: (id) => RealmAPI + `worlds/${id}/configuration`,
    },
    PUT: {
        RealmUpdateInvite: (id) => RealmAPI + `invites/${id}/invite/update`,
        RealmDefaultPermission: (id) => RealmAPI + `worlds/${id}/defaultPermission`,
        RealmUserPermission: (id) => RealmAPI + `worlds/${id}/userPermission`,
        RealmBackup: (id, backupId) => RealmAPI + `worlds/${id}/backups?backupId=${backupId}&clientSupportsRetries`,
        RealmSlot: (id, slotNum) => RealmAPI + `worlds/${id}/slot/${slotNum}`,
        RealmOpen: (id) => RealmAPI + `worlds/${id}/open`,
        RealmClose: (id) => RealmAPI + `worlds/${id}/close`,
    },
    DELETE: {
        RealmBlockedPlayer: (id, xuid) => RealmAPI + `worlds/${id}/blocklist/${xuid}`,
        RealmInvite: (id) => RealmAPI + `invites/${id}`,
        RealmWorld: (id) => RealmAPI + `worlds/${id}`,
    },
    XBOX: {
        GET: {
            UserSettingsByXuid: (xuid) => XboxAPI + `users/xuid(${xuid})/settings`,
            UserSettingsByName: (name) => XboxAPI + `users/gt(${name})/settings`
        }
    }
}