import reflex as rx

class State(rx.State):
    mostrar_solo_pendientes: bool = False

    def mostrar_pendientes(self):
        self.mostrar_solo_pendientes = not self.mostrar_solo_pendientes

tareas_en_progreso = [
    {"titulo": "Tarea 1", "estado": "En Progreso"},
    {"titulo": "Tarea 2", "estado": "Pendiente"},
]

tareas_completadas = [
    {"titulo": "Tarea 3", "estado": "Completada"},
    {"titulo": "Tarea 4", "estado": "Pendiente"},
]

def contar_tareas_por_estado(tareas):
    contadores = {}
    for tarea in tareas:
        estado = tarea["estado"]
        contadores[estado] = contadores.get(estado, 0) + 1
    return contadores

def tarjeta_tarea(tarea):
    return rx.box(
        tarea["titulo"],
        class_name="bg-white shadow-md rounded-md p-4 my-2"
    )

def columna_kanban(nombre, tareas):
    tareas_mostradas = rx.cond(
        State.mostrar_solo_pendientes,
        [t for t in tareas if t["estado"] == "Pendiente"],
        tareas
    )

    return rx.box(
        rx.heading(nombre, class_name="text-xl font-bold mb-4"),
        rx.foreach(
            tareas_mostradas,
            lambda tarea: tarjeta_tarea(tarea)
        ),
        class_name="bg-gray-100 rounded-md p-4 w-64"
    )


def index():

    contadores_en_progreso = contar_tareas_por_estado(tareas_en_progreso)
    contadores_completadas = contar_tareas_por_estado(tareas_completadas)

    return rx.box(
        rx.button("Mostrar Pendientes", on_click=State.mostrar_pendientes,
                  class_name="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"),
        rx.hstack(
            columna_kanban("En Progreso", tareas_en_progreso),
            columna_kanban("Completadas", tareas_completadas),
            spacing="4",
            class_name="p-4"
        ),

        rx.box(
            rx.box(f"En Progreso: {contadores_en_progreso.get('En Progreso', 0)}", class_name="text-gray-700 font-bold mt-4"),
            rx.box(f"Pendientes: {contadores_en_progreso.get('Pendiente', 0)}", class_name="text-gray-700 font-bold mt-4"),
            rx.box(f"Completadas: {contadores_completadas.get('Completada', 0)}", class_name="text-gray-700 font-bold mt-4"),
            rx.box(f"Pendientes (Completadas): {contadores_completadas.get('Pendiente', 0)}", class_name="text-gray-700 font-bold mt-4"),
            class_name="mt-4"
        ),
        class_name="container mx-auto"
    )

app = rx.App(state=State)
app.add_page(index)


