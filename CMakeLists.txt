cmake_minimum_required(VERSION 3.19)
project(nativize-qtwebengine LANGUAGES CXX)

find_package(Qt6 6.5 REQUIRED COMPONENTS Core Widgets WebEngineWidgets)

# Add this line to define the macro
add_definitions(-DNATIVIZE_URL="${NATIVIZE_URL}")

qt_standard_project_setup()

qt_add_executable(nativize-qtwebengine
    WIN32 MACOSX_BUNDLE
    main.cpp
    mainwindow.cpp
    mainwindow.h
)

target_link_libraries(nativize-qtwebengine
    PRIVATE
        Qt::Core
        Qt::Widgets
        Qt::WebEngineWidgets
)

include(GNUInstallDirs)

install(TARGETS nativize-qtwebengine
    BUNDLE  DESTINATION .
    RUNTIME DESTINATION ${CMAKE_INSTALL_BINDIR}
    LIBRARY DESTINATION ${CMAKE_INSTALL_LIBDIR}
)

qt_generate_deploy_app_script(
    TARGET nativize-qtwebengine
    OUTPUT_SCRIPT deploy_script
    NO_UNSUPPORTED_PLATFORM_ERROR
)
install(SCRIPT ${deploy_script})

add_custom_target(run
    COMMAND $<TARGET_FILE:nativize-qtwebengine>
    DEPENDS nativize-qtwebengine
    WORKING_DIRECTORY ${CMAKE_CURRENT_BINARY_DIR}
)