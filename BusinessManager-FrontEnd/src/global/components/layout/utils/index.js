export function handleNavigate(key, collapsed) {
    switch (key) {
        case '1':
            return "../home" // Dashboard
        case '2':
            return "../product" // Produtos
        case '3':
            return "../user" // Usuários
        case '4':
            return "../home" // Configurações
        default:
            return
    };
}
