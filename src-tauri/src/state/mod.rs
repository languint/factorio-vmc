use factorio_workshop::prelude::*;

#[derive(Default)]
pub struct AppState {
    pub current_project: Option<Project>,
    pub tool_selection: u8,
}
