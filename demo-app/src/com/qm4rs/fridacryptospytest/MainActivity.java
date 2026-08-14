package com.qm4rs.fridacryptospytest;

import android.app.Activity;
import android.content.ClipData;
import android.content.ClipboardManager;
import android.content.Context;
import android.graphics.Color;
import android.graphics.Typeface;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.view.View;
import android.widget.Button;
import android.widget.LinearLayout;
import android.widget.ScrollView;
import android.widget.TextView;
import android.widget.Toast;

public final class MainActivity extends Activity {
    private TextView reportView;
    private Button runButton;
    private volatile boolean running;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        LinearLayout root = new LinearLayout(this);
        root.setOrientation(LinearLayout.VERTICAL);
        root.setPadding(dp(16), dp(16), dp(16), dp(16));
        root.setBackgroundColor(Color.rgb(247, 249, 252));

        TextView title = new TextView(this);
        title.setText("Frida Java Crypto Spy\nStrict Validation APK");
        title.setTextSize(22);
        title.setTextColor(Color.rgb(16, 32, 56));
        title.setTypeface(Typeface.DEFAULT, Typeface.BOLD);
        root.addView(title);

        TextView hint = new TextView(this);
        hint.setText("Spawn this app with the Frida agent loaded. Tests auto-run once; use Run Again after attaching late. Every case asserts actual crypto results locally.");
        hint.setTextSize(14);
        hint.setTextColor(Color.DKGRAY);
        hint.setPadding(0, dp(8), 0, dp(12));
        root.addView(hint);

        LinearLayout buttons = new LinearLayout(this);
        buttons.setOrientation(LinearLayout.HORIZONTAL);

        runButton = new Button(this);
        runButton.setText("Run strict matrix");
        runButton.setOnClickListener(new View.OnClickListener() {
            @Override public void onClick(View view) { startTests(); }
        });
        buttons.addView(runButton, new LinearLayout.LayoutParams(0, dp(52), 1f));

        Button copyButton = new Button(this);
        copyButton.setText("Copy report");
        copyButton.setOnClickListener(new View.OnClickListener() {
            @Override public void onClick(View view) { copyReport(); }
        });
        buttons.addView(copyButton, new LinearLayout.LayoutParams(0, dp(52), 1f));
        root.addView(buttons);

        reportView = new TextView(this);
        reportView.setText("Waiting for automatic run…");
        reportView.setTextSize(12);
        reportView.setTextColor(Color.rgb(20, 30, 45));
        reportView.setTypeface(Typeface.MONOSPACE);
        reportView.setTextIsSelectable(true);
        reportView.setPadding(0, dp(12), 0, dp(24));

        ScrollView scroll = new ScrollView(this);
        scroll.addView(reportView);
        root.addView(scroll, new LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.MATCH_PARENT, 0, 1f));

        setContentView(root);
        new Handler(Looper.getMainLooper()).postDelayed(new Runnable() {
            @Override public void run() { startTests(); }
        }, 1200);
    }

    private void startTests() {
        if (running) return;
        running = true;
        runButton.setEnabled(false);
        reportView.setText("Running strict crypto matrix…\nRSA and AndroidKeyStore cases may take a moment.\n");

        new Thread(new Runnable() {
            @Override public void run() {
                final String report = StrictCryptoMatrix.runAll();
                runOnUiThread(new Runnable() {
                    @Override public void run() {
                        running = false;
                        runButton.setEnabled(true);
                        reportView.setText(report);
                    }
                });
            }
        }, "crypto-strict-matrix").start();
    }

    private void copyReport() {
        ClipboardManager clipboard = (ClipboardManager) getSystemService(Context.CLIPBOARD_SERVICE);
        clipboard.setPrimaryClip(ClipData.newPlainText("Frida Crypto Spy report", reportView.getText()));
        Toast.makeText(this, "Report copied", Toast.LENGTH_SHORT).show();
    }

    private int dp(int value) {
        return Math.round(value * getResources().getDisplayMetrics().density);
    }
}
