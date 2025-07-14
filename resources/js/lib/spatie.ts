import { usePage } from "@inertiajs/react";
import type { Role, Auth } from "@/types";

export function can(permission: string) : boolean {
    const page = usePage();
    const auth = page.props.auth as Auth;
    const roles = auth.roles ?? [];
    const permissions = auth.permissions ?? [];

    console.log(permissions);
    console.log(roles);

    // If user has Super Admin role, they can do anything
    if (roles.some((role: Role) => role.name === 'Super Admin')) {
        return true;
    }

    console.log(permissions.includes(permission),'includes');

    // Otherwise, check specific permissions
    return permissions.includes(permission);
}

export function hasRole(roleName: string) : boolean {
    const page = usePage();
    const auth = page.props.auth as Auth;
    const roles = auth.roles ?? [];
    
    return roles.some((role: Role) => role.name === roleName);
}   