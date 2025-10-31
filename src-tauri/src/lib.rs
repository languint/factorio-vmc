mod commands;
mod state;

use std::sync::Mutex;

use commands::fullscreen;
use tauri::Manager;

use crate::{commands::state::project, state::AppState};

pub fn run() {
    tauri::Builder::default()
        .setup(|app| {
            app.manage(Mutex::new(AppState::default()));
            Ok(())
        })
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![
            fullscreen::toggle_fullscreen,
            project::get_project
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
