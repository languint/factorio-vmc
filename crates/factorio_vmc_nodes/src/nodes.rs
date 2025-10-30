#[derive(Debug, Clone, Copy, PartialEq, Eq)]
/// Nodes are the objects that will be connected to form the program
pub enum Nodes {
    Listener,
    Function,
}