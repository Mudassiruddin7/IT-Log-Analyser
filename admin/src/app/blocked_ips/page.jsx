"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Spinner,
  Button,
} from "@nextui-org/react";

export default function Page() {
  const [blockedIps, setBlockedIps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlockedIps = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/blocked_ips`,
          {
            method: "GET",
            cache: "no-cache",
          }
        );
        const data = await response.json();
        setBlockedIps(data.blocked_ips);
      } catch (error) {
        console.error("Error fetching blocked IPs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlockedIps();
  }, []);

  const unblockIP = async (ip) => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/unblock_ip`, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify({ ip }),
      });
      alert("IP Unblocked");
      setBlockedIps(blockedIps.filter((blockedIp) => blockedIp.ip_address !== ip));
    } catch (error) {
      console.error("Error unblocking IP:", error);
    }
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <Table aria-label="Example table with client async pagination">
      <TableHeader>
        <TableColumn key="blocked_ips">IP Address</TableColumn>
        <TableColumn key="actions">Actions</TableColumn>
      </TableHeader>
      <TableBody items={blockedIps}>
        {(item) => (
          <TableRow key={item.ip_address}>
            <TableCell>{item.ip_address}</TableCell>
            <TableCell>
              <Button onPress={() => unblockIP(item.ip_address)}>
                Unblock IP
              </Button>
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
