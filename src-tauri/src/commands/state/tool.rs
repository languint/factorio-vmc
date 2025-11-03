use std::sync::Mutex;
use tauri::{Emitter, State};

use crate::state::AppState;

#[tauri::command]
/// Get the currently loaded [`Tool`]
pub async fn get_tool(state: State<'_, Mutex<AppState>>) -> Result<u8, String> {
    let state = state.lock().or(Err("Failed to get lock on AppState!"))?;
    Ok(state.tool_selection)
}

#[tauri::command]
/// Set the currently loaded [`Tool`]
/// Emits `tool-changed` signal on change.
pub async fn set_tool(
    app: tauri::AppHandle,
    state: State<'_, Mutex<AppState>>,
    tool: u8,
) -> Result<(), String> {
    {
        let mut state = state.lock().or(Err("Failed to get lock on AppState!"))?;
        state.tool_selection = tool;
    }
    app.emit("tool-changed", tool).map_err(|e| e.to_string())?;
    Ok(())
}
