#include "mainwindow.h"

MainWindow::MainWindow(QWidget *parent)
    : QMainWindow(parent), webView(new QWebEngineView(this))
{
    setCentralWidget(webView);
    webView->setUrl(QUrl(NATIVIZE_URL));
}

MainWindow::~MainWindow()
{
    delete webView;
}
