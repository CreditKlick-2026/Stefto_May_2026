import React from "react";
import {
    AreaChart,
    Area,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";

export default function PerformanceGraph() {
    const data = [
        { name: 'Mon', messages: 4000, delivered: 3800 },
        { name: 'Tue', messages: 3000, delivered: 2900 },
        { name: 'Wed', messages: 5000, delivered: 4950 },
        { name: 'Thu', messages: 2780, delivered: 2700 },
        { name: 'Fri', messages: 6890, delivered: 6800 },
        { name: 'Sat', messages: 8390, delivered: 8300 },
        { name: 'Sun', messages: 6490, delivered: 6400 },
    ];

    return (
        <div className="w-full h-[400px] bg-card rounded-3xl p-6 border border-border shadow-xl">
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h3 className="text-lg font-bold">Real-time Throughput</h3>
                    <p className="text-sm text-muted-foreground">Messages delivered per second</p>
                </div>
                <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
                    <span className="text-sm font-medium text-blue-500">Live</span>
                </div>
            </div>
            <ResponsiveContainer width="100%" height="85%">
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="colorMessages" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorDelivered" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.5} vertical={false} />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                    <Tooltip
                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                        itemStyle={{ fontWeight: 'bold' }}
                    />
                    <Area type="monotone" dataKey="messages" stroke="hsl(var(--primary))" strokeWidth={3} fillOpacity={1} fill="url(#colorMessages)" />
                    <Area type="monotone" dataKey="delivered" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorDelivered)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}
