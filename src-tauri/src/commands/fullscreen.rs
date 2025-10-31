use tauri::{Runtime, WebviewWindow};

#[tauri::command]
pub fn toggle_fullscreen<R: Runtime>(window: WebviewWindow<R>) -> Result<(), String> {
    let is_fullscreen = window.is_fullscreen().map_err(|e| e.to_string())?;
    window
        .set_fullscreen(!is_fullscreen)
        .map_err(|e| e.to_string())?;
    Ok(())
}
