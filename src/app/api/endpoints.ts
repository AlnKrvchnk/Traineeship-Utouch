export const todo = {
    getAll: () => '/Item',
    getById: (id: number) => `/Item/${id}`,
    create: () => '/Item',
    delete: (id: string) => `/Item/${id}`,
    update: (id: number) => `/Item/${id}`,
}
export const auth = {
    // getAll: () => '/users',
    // getById: (id: number) => `/auth/${id}`,
    signUp: () => '/User',
    signIn: () => '/User',
    // delete: (id: number) =>`/auth/${id}`,
    // update: (id: number) => `/auth/${id}`,
}