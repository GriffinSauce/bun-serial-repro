import { autoDetect } from "@serialport/bindings-cpp";

const Binding = autoDetect();
Binding.list();
