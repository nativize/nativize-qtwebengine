#include "mainwindow.h"

MainWindow::MainWindow(QWidget *parent)
    : QMainWindow(parent), webView(new QWebEngineView(this))
{
    setCentralWidget(webView);
    webView->setUrl(QUrl("https://github.com/nativize"));
}

MainWindow::~MainWindow()
{
    delete webView;
}
