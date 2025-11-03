use std::sync::Mutex;
use tauri::{Emitter, State};

use crate::state::AppState;
use factorio_workshop::prelude::*;

#[tauri::command]
/// Get the currently loaded [`Project`]
pub async fn get_project(state: State<'_, Mutex<AppState>>) -> Result<Option<Project>, String> {
    let state = state.lock().or(Err("Failed to get lock on AppState!"))?;
    Ok(state.current_project.clone())
}

#[tauri::command]
/// Set the currently loaded [`Project`]
/// Emits `project-changed` signal on change.
pub async fn set_project(
    app: tauri::AppHandle,
    state: State<'_, Mutex<AppState>>,
    project: Option<Project>,
) -> Result<(), String> {
    {
        let mut state = state.lock().or(Err("Failed to get lock on AppState!"))?;
        state.current_project = project.clone();
    }
    app.emit("project-changed", project)
        .map_err(|e| e.to_string())?;
    Ok(())
}
