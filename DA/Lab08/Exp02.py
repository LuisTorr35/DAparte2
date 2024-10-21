import reflex as rx

class EstadoTareas(rx.State):
    tareas = ["Tarea 1", "Tarea 2", "Tarea 3"]
    nuevaTarea = ""

    def agregar_tarea(self, nueva_tarea):
        self.tareas.append(nueva_tarea)

    def setNuevaTarea(self, tarea):
        self.nuevaTarea = tarea

def index():
    nueva_tarea = rx.input(
            placeholder="Agregar tarea...",
            on_blur=EstadoTareas.setNuevaTarea,
        ),
    return rx.fragment(
        rx.heading("Lista de Tareas"),
        rx.foreach(EstadoTareas.tareas, lambda tarea: rx.list_item(tarea)),
        nueva_tarea,
        rx.button("Agregar", on_click=lambda: EstadoTareas.agregar_tarea(EstadoTareas.nuevaTarea)),
    )

app = rx.App()
app.add_page(index)
