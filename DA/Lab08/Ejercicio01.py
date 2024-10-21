import reflex as rx

class State(rx.State):
    mostrar_solo_pendientes: bool = False

    def alternar_mostrar_pendientes(self):
        self.mostrar_solo_pendientes = not self.mostrar_solo_pendientes

tareas_en_progreso = [
    {"titulo": "Terminar ITI", "estado": "En Progreso"},
    {"titulo": "Completar GDI", "estado": "Pendiente"},
]

tareas_completadas = [
    {"titulo": "Hacer Guia de desarrollo", "estado": "Completada"},
    {"titulo": "Terminar Redes III", "estado": "Pendiente"},
]


def tarjeta_tarea(tarea):
    return rx.box(
tarea["titulo"],
        padding="10px",
        border="1px solid #ccc",
        border_radius="5px",
        margin="5px 0",
        background_color="#f0f0f0",
        color="#333",
    )

def columna_kanban(nombre, tareas):
    tareas_mostradas = rx.cond(
        State.mostrar_solo_pendientes,
        [t for t in tareas if t["estado"] == "Pendiente"],
        tareas
    )

    return rx.box(
        rx.heading(nombre, size="md", color="#333"),
        rx.foreach(
            tareas_mostradas,
            lambda tarea: tarjeta_tarea(tarea)
        ),
        margin="10px",
        padding="10px",
        border="1px solid #ddd",
        border_radius="5px",
        background_color="#fff"
    )


def mostrar_contadores():
    # Contamos las tareas en progreso y completadas
    contador_en_progreso = contar_tareas_por_estado(tareas_en_progreso)
    contador_completadas = contar_tareas_por_estado(tareas_completadas)

    return rx.box(
        rx.box(f"Tareas en Progreso: {contador_en_progreso.get('En Progreso', 0)}", margin="10px 0", font_size="18px", color="#333"),
        rx.box(f"Tareas Pendientes: {contador_en_progreso.get('Pendiente', 0) + contador_completadas.get('Pendiente', 0)}", margin="10px 0", font_size="18px", color="#333"),
        rx.box(f"Tareas Completadas: {contador_completadas.get('Completada', 0)}", margin="10px 0", font_size="18px", color="#333"),
        padding="10px",
        border="1px solid #ddd",
        border_radius="5px",
        background_color="#f1f1f1",
    )

def contar_tareas_por_estado(tareas):
    contador = {}
    for tarea in tareas:
        estado = tarea["estado"]
        if estado in contador:
            contador[estado] += 1
        else:
            contador[estado] = 1
    return contador

def index():
    return rx.box(
        rx.button(
            rx.cond(State.mostrar_solo_pendientes, "Mostrar Todas", "Mostrar Pendientes"),
            on_click=State.alternar_mostrar_pendientes,  # Llama a la función para alternar el estado
            background_color="#007bff",
            color="white",
            padding="10px",
            margin="10px 0",
            border_radius="5px"
        ),

        rx.box(
            columna_kanban("En Progreso", tareas_en_progreso),
            columna_kanban("Completadas", tareas_completadas),
            display="flex",
            justify_content="space-around"
        ),

        mostrar_contadores(),
        padding="20px",
        background_color="#282c34",  # Fondo oscuro general para contrastar
        color="white",  # Texto blanco general
    )

app = rx.App(state=State)
app.add_page(index)
