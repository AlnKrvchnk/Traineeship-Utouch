export const todo = {
    getAll: () => '/todo',
    getById: (id: number) => `/todo/${id}`,
    create: () => '/todo',
    delete: (id: string) =>`/todo/${id}`,
    update: (id: number) => `/todo/${id}`,
}
export const auth = {
    // getAll: () => '/users',
    // getById: (id: number) => `/auth/${id}`,
    create: () => '/auth',
    // delete: (id: number) =>`/auth/${id}`,
    update: (id: number) => `/auth/${id}`,
}