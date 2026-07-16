@echo off
setlocal
cd /d "%~dp0"

set "NODE_EXE=%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"

if not exist "%NODE_EXE%" (
  echo Could not find bundled Node.js at:
  echo %NODE_EXE%
  echo.
  echo If you have Node.js installed globally, run:
  echo npm run dev
  exit /b 1
)

"%NODE_EXE%" "node_modules\next\dist\bin\next" dev --hostname 127.0.0.1 --port 3000
